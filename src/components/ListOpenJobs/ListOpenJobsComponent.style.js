import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
`;

const GridContainer = styled.div`
  @media (min-width: 912px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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
  background-image: linear-gradient(90deg, #1a75c1 10%, #13b705 50%);

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

export { Container, PaginationContainer, Msg, GridContainer };
