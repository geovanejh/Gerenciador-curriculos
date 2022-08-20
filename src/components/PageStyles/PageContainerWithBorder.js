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
