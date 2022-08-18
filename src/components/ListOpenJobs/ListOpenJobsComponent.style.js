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
  /* color: grey; */
  background-image: linear-gradient(90deg, #1a75c1 10%, #13b705 50%);

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

export { Container, PaginationContainer, Msg };
