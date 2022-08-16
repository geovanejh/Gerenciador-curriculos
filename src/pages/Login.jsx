import AuthPages from "../components/AuthPages/AuthPages";
import { connect } from "react-redux";
import LoginForm from "../components/AuthPages/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Login = ({ loading }) => {
  const navigate = useNavigate();
  const imgPlaceholder = `https://cdn.vox-cdn.com/thumbor/_5VL-ea6IV1erwRkQh-ca02vkjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206366/akrales_190913_3666_0126.jpg`;
  console.log("a", loading);

  const handleButton = () => {
    navigate("/register");
  };

  return loading ? (
    <Loading />
  ) : (
    <AuthPages
      img={imgPlaceholder}
      form={<LoginForm />}
      handleButton={handleButton}
      button="Registrar"
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Login);
