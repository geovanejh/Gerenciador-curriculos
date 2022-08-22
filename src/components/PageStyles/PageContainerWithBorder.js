import styled from "styled-components";

export const PageContainerWithBorder = styled.div`
  border-right: 1px solid #1ab24e;
  border-bottom: 1px solid #1ab24e;
  border-left: 1px solid #1ab24e;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;

  h2,
  h3 {
    color: #1ab24e;
  }

  > button {
    align-self: flex-end;
  }
`;

export const BackButton = styled.button`
  align-self: start !important;
  background: #1ab24e;
  border-radius: 50px;
  padding: 14px 24px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #fff;
  cursor: pointer;
`;
