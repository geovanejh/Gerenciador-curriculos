import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 32px;
  }

  h5 {
    margin-top: 8px;
    font-weight: 500;
    color: gray;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 12px;

  > button {
    margin-top: 18px;
  }
`;
