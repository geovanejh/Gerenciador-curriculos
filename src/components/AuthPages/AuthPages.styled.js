import styled from "styled-components";

export const AuthPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 15px;
`;

export const ImageContainer = styled.div`
  width: 60%;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  > button {
    position: absolute;
    margin: 30px;
    background-color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 700;

    :hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;

export const AuthContent = styled.div`
  width: 40%;
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
