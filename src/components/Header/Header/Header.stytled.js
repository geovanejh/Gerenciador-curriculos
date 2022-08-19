import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(90deg, rgba(26, 178, 78, 1) 0%, rgba(1, 115, 189, 1) 100%);
  margin-bottom: 32px;

  > header {
    padding: 10px 0;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;

      > nav {
        width: 200px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;
