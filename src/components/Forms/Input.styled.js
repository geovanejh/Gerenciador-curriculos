import styled from "styled-components";

export const Input = styled.input`
  background: #fcfdfe;
  border: ${(props) => (props.errors && props.touched ? "1px solid red" : "1px solid #9fa2b4")};
  border-radius: 8px;
  padding: 8px 16px;
  height: 42px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #4b506d;
    opacity: 0.4;
  }

  :focus {
    outline: none;
  }
`;
