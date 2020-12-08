import React from "react";
import { Input, TextArea, Select } from "./index";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
    case "date":
    case "checkbox":
    default:
      return null;
  }
};
export default FormikControl;
