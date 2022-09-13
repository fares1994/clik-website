import gql from 'graphql-tag';

const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    __typename
    _id
    name
    choices {
      image {
        _id
      }
      colorsHex
    }
    price
    description
  }
`;
export const GET_PRODUCTS = gql`
  query findProducts {
    findProducts {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_BY_ID = gql`
  query findProductById($id: String!) {
    findProductById(id: $id) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const CREATE_ORDER = gql`
  mutation createOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput)
  }
`;

export const CREATE_CONTACT_US = gql`
  mutation createContactUs($createContactUsInput: CreateContactUsInput!) {
    createContactUs(createContactUsInput: $createContactUsInput)
  }
`;
