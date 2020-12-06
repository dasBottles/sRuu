import React from 'react'
import { Field } from 'formik';

const FormikTextArea = (props) => {
    const { label, name, ...rest} = props
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} />
        </>
    )
}

export default FormikTextArea
