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
  text-decoration: none;

  li {
    > a {
      padding: 4px 8px;
    }

    &.selected {
      padding: 4px 0;
      background-color: #1ab24e;
      border-radius: 5px;
      text-decoration: none;
    }
    
    margin: 0 5px;
    text-decoration: none;
    cursor: pointer;
  }

  li :hover {
    padding: 4px 8px;
    color: white;
    background-color: #ddd;
    border-radius: 5px;

    a {
      background-color: #1ab24e;
      margin: 0;
    }
  }
`;

const Msg = styled.h1`
  background-image: linear-gradient(90deg, #1a75c1 10%, #13b705 50%);

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

export { Container, PaginationContainer, Msg, GridContainer };
