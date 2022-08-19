import styled from "styled-components";

export const StepperContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  padding: 12px;
  display: flex;
  gap: 32px;
  justify-content: center;
  color: #fff;
  background: linear-gradient(90deg, rgba(26, 178, 78, 1) 0%, rgba(1, 115, 189, 1) 100%);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    > button {
      border-radius: 10%;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
    }

    > p {
      color: #fff;
      font-size: 14px;
    }
  }
`;
