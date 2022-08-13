import { AuthContent, AuthPage, ImageContainer } from "./AuthPages.styled";
import Logo from "../Header/Logo";
import LoginForm from "./LoginForm/LoginForm";

const AuthPages = () => {
  const imgPlaceholder = `https://cdn.vox-cdn.com/thumbor/_5VL-ea6IV1erwRkQh-ca02vkjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206366/akrales_190913_3666_0126.jpg`;

  return (
    <AuthPage>
      <ImageContainer>
        <img src={imgPlaceholder}></img>
      </ImageContainer>
      <AuthContent>
        <LoginForm />
      </AuthContent>
    </AuthPage>
  );
};
export default AuthPages;
