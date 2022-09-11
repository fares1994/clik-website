import { createSlice, current } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Mutation, Query } from '../helpers';
// import { Query, Mutation } from '../helpers';
import { AppThunk, store } from '../store';
import {
  Choice,
  CreateOrderInput,
  OrderProductInputFrontEnd,
  Product,
} from '../types';
import { CREATE_ORDER, GET_PRODUCTS, GET_PRODUCT_BY_ID } from './graphql';

interface initialStateType {
  products: Product[];
  selectedProducts: OrderProductInputFrontEnd[];
}
const slice = createSlice({
  name: 'store',
  initialState: {
    products: [],
    selectedProducts: [],
  } as initialStateType,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    clearSelectedProducted: (state) => {
      state.selectedProducts = [];
    },
    setSelectedProductsQuantity: (state, action) => {
      const index = current(state.selectedProducts).findIndex((product) => {
        if (
          product?.color === action.payload.color &&
          product?.product._id === action.payload.product._id
        ) {
          return true;
        }
        return false;
      });
      state.selectedProducts[index] = action.payload;
    },
    removeSelectedProduct: (state, action) => {
      const index = state.selectedProducts.findIndex(
        (product) =>
          action.payload.color === product.color &&
          action.payload.product._id === product.product._id
      );
      state.selectedProducts.splice(index, 1);
    },
    addToSelectedProducts: (state, action) => {
      if (state.selectedProducts) {
        const index = current(state.selectedProducts).findIndex((product) => {
          if (
            product?.color === action.payload.color &&
            product?.product._id === action.payload.product._id
          ) {
            return true;
          }
          return false;
        });
        if (index < 0) {
          state.selectedProducts.push(action.payload);
        } else {
          state.selectedProducts[index] = {
            ...state.selectedProducts?.[index],
            quantity:
              state.selectedProducts?.[index].quantity +
              action.payload.quantity,
          };
        }
      } else {
        state.selectedProducts = [action.payload];
      }
    },
  },
});

export default slice.reducer;

export const {
  setProducts,
  addToSelectedProducts,
  clearSelectedProducted,
  removeSelectedProduct,
  setSelectedProductsQuantity,
} = slice.actions;

export const getProductsAction = (): AppThunk => async (dispatch) => {
  Query<undefined, { findProducts: [Product] }>({
    query: GET_PRODUCTS,
    successCallback: ({ data }) => {
      if (data?.findProducts) {
        dispatch(setProducts(data?.findProducts));
      }
    },
  });
};

export const getProductByIdAction =
  (
    id: string,
    setCurrentProduct: React.Dispatch<
      React.SetStateAction<Product | undefined>
    >,
    setCurrentChoice: (choice: Choice) => void
  ): AppThunk =>
  async () => {
    Query<{ id: string }, { findProductById: Product }>({
      query: GET_PRODUCT_BY_ID,
      variables: { id },
      successCallback: ({ data }) => {
        if (data?.findProductById) {
          setCurrentProduct(data?.findProductById);
          setCurrentChoice(data?.findProductById?.choices?.[0]);
        }
      },
    });
  };

export const createOrderAction =
  (
    createOrderInput: CreateOrderInput,
    navigateToThankyou: () => void
  ): AppThunk =>
  async (dispatch) => {
    const selectedProducts = store.getState().storeReducer.selectedProducts;
    if (!selectedProducts.length) {
      // eslint-disable-next-line no-console
      console.log('removeme');
    }
    createOrderInput.products = selectedProducts.map((product) => ({
      color: product?.color,
      product: product?.product?._id,
      quantity: product?.quantity,
    }));
    Mutation<{ createOrderInput: CreateOrderInput }, { createOrder: boolean }>({
      mutation: CREATE_ORDER,
      variables: { createOrderInput },
      successCallback: ({ data }) => {
        if (data?.createOrder) {
          // eslint-disable-next-line no-console
          console.log('removeMe');
          toast(
            'You order has been created successfully, and we will contact you soon',
            {
              type: 'success',
              style: {
                fontSize: 18,
              },
            }
          );
          navigateToThankyou();
          dispatch(clearSelectedProducted());
        }
      },
    });
  };
