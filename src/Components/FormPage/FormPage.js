import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import './styles.css';

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
      <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
          <div className='error'>{meta.error}</div>
      ) : null}
      </>
    );
  };
const FormPage = () => {
    return (
        <Formik
        initialValues={{ 
            name: '',
            email: '',
            description: '',
        }}
        validationSchema={Yup.object({
            name: Yup
            .string()
            .min(3, 'Must be at least 3 characters long')
            .max(24, 'Must be shorter than 24 characters')
            .required('Required'),
            email: Yup
            .string()
            .email('Invaild email address')
            .required('Required')
            
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
            })
        }}
        >
            {props => (
                <Form>
                    <h1>test</h1>
                    <CustomTextInput label='Name' name='name' type='text' placeholder='Enter Name Here' />
                    <CustomTextInput label='Email' name='email' type='email' placeholder='Enter Email Address Here' />
                    <CustomTextInput label='Description' name='description' type='text' />
                    <button type='submit'>{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormPage;
