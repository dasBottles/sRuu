import styled, { css } from "styled-components";

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: #777;
  }

  .termArea {

  }
  li {
    padding: 15px 0 15px 0;
    color: #8bc0de;
    word-wrap: normal !important; 
  }

  form {
    display: flex;
    flex-direction: column;
    /* width: 75%; */
    margin: 100px auto;

    label {
      margin-top: 20px;
    }

    input,
    select,
    .requestInput {
      font-size: 1.2em;
    }

    .error {
      color: red;
      font-size: 0.6em;
    }

    .requestInput {
      overflow: none;
      height: 350px;
    }

    .nameField,
    .emailField {
      max-width: 50%;
    }
  }

  button {
    background: #19978f;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em;
    align-self: center;
  }

.sectionTitle {
  font-weight: bold; 
  border-bottom: thick solid cyan;
  border-radius: 15%;
}
`;
