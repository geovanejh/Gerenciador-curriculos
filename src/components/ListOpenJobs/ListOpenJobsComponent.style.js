import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationContainer = styled(ReactPaginate)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 5px;

    cursor: pointer;
  }

  li :hover {
    color: #00a8ff;
    border-bottom: 1px solid black;
  }
`;

const Msg = styled.h1`
  color: grey;
`;

export { Container, PaginationContainer, Msg };
