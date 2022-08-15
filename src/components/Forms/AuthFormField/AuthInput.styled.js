import styled from "styled-components";

export const AuthInputStyles = styled.div`
  > span {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: red;
  }
`;

export const AuthInputField = styled.input`
  border: none;
  border-bottom: ${(props) => (props.errors && props.touched ? "1px solid red" : "1px solid #a6acb6")};
  padding: 6px 0 6px 0;
  font-size: 16px;
  width: 100%;
  margin-bottom: 12px;

  ::placeholder {
    font-size: 12px;
    font-weight: 200;
  }

  :focus {
    outline: none;
  }
`;
