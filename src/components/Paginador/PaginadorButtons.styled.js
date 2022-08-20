import styled from "styled-components";

export const Pager = styled.div`
  align-self: flex-end;
`;

export const PaginadorButton = styled.button`
  border: none;
  background: ${(props) => (props.active ? "#1AB24E" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 5px;

  font-size: 12px;

  :hover {
    background-color: #ddd;
  }
`;
