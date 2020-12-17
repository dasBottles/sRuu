import React from "react";
import { Styles } from "./styles.js";
import FormikContainer from "../Formik/FormikContainer";

const FormPage = () => {
  return (
    <Styles>
      <div className="container-lg">
        <div className="termArea">
          <ol>
            <ul>
              <span className='sectionTitle'>
                Terms
              </span>
              <p>
                Insert potatoes here
              </p>
            </ul>
          </ol>
        </div>
        <div className="formArea">
          <FormikContainer />
        </div>
      </div>
    </Styles>
  );
};

export default FormPage;
