/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import { Column, HeaderTitle } from '../Cart';
import { Split } from '../Products/ProductsList';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import useWindowSize from '../../Helpers/WindowSizeHook';
import * as yup from 'yup';
import { useFormik } from 'formik';
import parsePhoneNumber from 'libphonenumber-js';
import { CreateOrderInput } from '../../Redux/types';
import { createOrderAction } from '../../Redux/storeReducer';
import { useAppDispatch } from '../../Redux/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const OrderCheckout = () => {
  const window = useWindowSize();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Required'),
    name: yup.string().required('Required'),
    location: yup.string().required('Required'),
    phonenumber: yup.string().required('Required'),
  });

  const { handleChange, handleSubmit, errors, touched, setFieldError, values } =
    useFormik({
      initialValues: {
        email: '',
        location: '',
        name: '',
        phonenumber: '',
      },
      onSubmit: (submittedValues) => {
        const { phonenumber } = submittedValues;
        const phoneNumber = parsePhoneNumber(phonenumber.trim(), 'JO');
        if (!phoneNumber?.isValid()) {
          toast('Please put a valid jordanian phone number', {
            type: 'error',
            style: {
              fontSize: 18,
            },
          });
          setFieldError('phonenumber', 'Not valid');
        }
        const inputs = {
          ...submittedValues,
          phonenumber: phoneNumber?.number,
        } as CreateOrderInput;
        dispatch(createOrderAction(inputs, handleNavigateToThankYou));
      },
      validationSchema,
    });
  const handleNavigateToThankYou = () => {
    navigate('/thankyou');
  };

  return (
    <div>
      <SubTitle title="Contact Information" />
      <SubNavigationBar currentPosition="ContactInfo" />
      <Column>
        <HeaderTitle>
          Please enter your contact information {'\n'} to be contacted and the
          product delivered
        </HeaderTitle>
        <Split />
        <Row>
          <InputWrapper>
            <CustomInput
              placeholder="Enter your name"
              title="Name"
              error={!!(errors.name && touched.name)}
              value={values.name}
              onChange={handleChange('name')}
            />
            <CustomInput
              error={!!(errors.email && touched.email)}
              placeholder="Enter your email"
              title="Email"
              value={values.email}
              onChange={handleChange('email')}
            />
            <CustomInput
              error={!!(errors.location && touched.location)}
              placeholder="Enter your location"
              title="Location"
              value={values.location}
              onChange={handleChange('location')}
            />
            <CustomInput
              error={!!(errors.phonenumber && touched.phonenumber)}
              placeholder="Enter your number"
              title="Phone"
              value={values.phonenumber}
              onChange={handleChange('phonenumber')}
            />
          </InputWrapper>
          <CustomButton
            color="orange"
            size={(window?.width || 0) > 700 ? 'xl' : 'lg'}
            title="Order Now"
            onClick={handleSubmit}
          />
        </Row>
      </Column>
    </div>
  );
};

export default OrderCheckout;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 40px 0px 200px;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    margin: 40px 0px 120px;
    align-items: center;
  }
`;

const InputWrapper = styled(Column)`
  margin-right: 60px;
  @media only screen and (max-width: 1000px) {
    margin-right: 0px;
  }
  @media only screen and (max-width: 1150px) {
    margin-bottom: 50px;
  }
`;
