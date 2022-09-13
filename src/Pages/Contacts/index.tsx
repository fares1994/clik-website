import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../Components/CustomButton';
import SubTitle from '../../Components/SubTitle';
import { Column, Row } from '../Cart';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../Redux/store';
import { createContactUsAction } from '../../Redux/storeReducer';

const Contacts = () => {
  const dispatch = useAppDispatch();
  const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    message: yup.string().required('Required'),
  });

  const { handleChange, handleSubmit, errors, touched, values, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        message: '',
      },
      onSubmit: (submittedValues) => {
        dispatch(createContactUsAction({ ...submittedValues }, handleSucces));
        handleSucces();
      },
      validationSchema,
    });
  const handleSucces = () => {
    resetForm();
    toast('We Recieved Your Message We Will Contact You Soon', {
      type: 'success',
      style: {
        fontSize: 18,
      },
    });
  };
  return (
    <div>
      <SubTitle title="Clik Store" />
      <Column bottom="200">
        <Title>Get in touch with us</Title>
        <Wrapper>
          <InnerWrapper>
            <CustomField
              placeholder="Name"
              bottom="30"
              onChange={handleChange('name')}
              value={values.name}
              error={!!(errors.name && touched.name)}
            />
            <CustomField
              placeholder="Email"
              onChange={handleChange('email')}
              value={values.email}
              error={!!(errors.email && touched.email)}
            />
          </InnerWrapper>
          <InnerWrapper>
            <MessageInput
              placeholder="Message"
              bottom="35"
              onChange={handleChange('message')}
              value={values.message}
              error={!!(errors.message && touched.message)}
            />
            <CustomButton
              color="orange"
              size="contact"
              title="Send"
              onClick={handleSubmit}
            />
          </InnerWrapper>
        </Wrapper>
      </Column>
    </div>
  );
};

export default Contacts;
export const Wrapper = styled(Row)`
  align-items: flex-start;
  margin-top: 40px;
`;
export const InnerWrapper = styled(Column)`
  margin: 0px 35px;
`;
export const Title = styled.div`
  color: #ff8b00;
  font-weight: 700;
  font-size: 50px;
`;

export const CustomField = styled.input<{
  bottom?: string;
  error?: boolean;
}>`
  background-color: #f4f4f4;
  width: 500px;
  height: 55px;
  border-radius: 50px;
  border-color: transparent;
  outline: none;
  padding: 22px 50px;
  ::placeholder {
    color: #b7b7b7;
    font-size: 24px;
  }
  margin-bottom: ${({ bottom }) => (bottom ? bottom + 'px' : '0px')};
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
`;

export const MessageInput = styled.textarea<{
  bottom?: string;
  error?: boolean;
}>`
  background-color: #f4f4f4;
  width: 500px;
  border-radius: 50px;
  border-color: transparent;
  outline: none;
  padding: 22px 50px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom + 'px' : '0px')};
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  height: 145px;
  ::placeholder {
    color: #b7b7b7;
    text-align: start;
    font-size: 24px;
  }
`;
