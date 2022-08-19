import styled from "styled-components";

export const Lista = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.3fr;
    padding: 12px;
    /* border-bottom: 1px solid rgb(223, 224, 235); */

    > div {
      display: flex;
      gap: 24px;
      justify-self: end;

      > button {
        padding: 0 6px;
        :hover {
          background-color: lightgray;
          border-radius: 5px;
        }
      }
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }

    :hover {
      background-color: #f7f8ff;
      cursor: pointer;
    }

    &:first-child {
      border-bottom: 1px solid rgb(223, 224, 235);
      padding-bottom: 4px;
      margin-bottom: 12px;
      cursor: default;

      :hover {
        background-color: #fff;
      }

      p {
        color: #1ab24e;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.2px;
      }
    }
  }
`;
