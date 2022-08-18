import styled from "styled-components";

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.grid ? props.grid : "1fr")};
  gap: 16px;
`;
