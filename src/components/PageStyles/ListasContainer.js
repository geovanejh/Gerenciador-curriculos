import styled from "styled-components";

export const ListasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  > div {
    width: 100%;

    ul > li {
      display: grid;
      grid-template-columns: 1fr 1fr 0.7fr 0.7fr;

      p {
        font-size: 12px;
      }

      :first-child {
        p {
          color: #0173bc;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 12px;
          line-height: 18px;
          -webkit-letter-spacing: 0.2px;
          -moz-letter-spacing: 0.2px;
          -ms-letter-spacing: 0.2px;
          letter-spacing: 0.2px;
          margin-top: 8px;
        }
      }
    }
  }
`;
