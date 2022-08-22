import { AuthContent, AuthPage, ImageContainer } from "./AuthPages.styled";

const AuthPages = ({ form, img, button, handleButton }) => {
  return (
    <AuthPage>
      <ImageContainer>
        <button onClick={handleButton} id="buttonConfirm">
          {button}
        </button>
        <img src={img}></img>
      </ImageContainer>
      <AuthContent>{form}</AuthContent>
    </AuthPage>
  );
};
export default AuthPages;
