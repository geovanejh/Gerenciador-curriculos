import styled from "styled-components";

export const SteppedForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //todo: remove calc
  height: calc(100vh - 22px);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 900px;
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

export const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
`;
