import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;

  button {
    border: none;
    cursor: pointer;
    background-color: #0173bc;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    padding: 0 4px;
    margin-left: 8px;
    border-radius: 4px;
    > label {
      color: #fff;
      cursor: pointer;
    }
  }

  ul li {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  }
`;
