import styled from "styled-components";

export const SteppedForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  height: 100vh;
`;

export const FormContainer = styled.form`
  width: 100%;
  border: 1px solid rgb(26, 178, 78);
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 24px;

  > button {
    align-self: flex-start;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const DinamicFormContent = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 0 12px 0;

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      border: none;
      margin-bottom: 12px;
    }
  }
`;

export const RemoveButton = styled.button`
  background: #ff3333;
  align-self: flex-end;
  justify-self: flex-end;
  height: 30px;
  width: 30px;
  font-weight: 600;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #e52d2d;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
`;
