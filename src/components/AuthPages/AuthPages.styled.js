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
`;

export const AuthContent = styled.div`
  width: 40%;
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
