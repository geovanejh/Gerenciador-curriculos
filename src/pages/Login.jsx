import AuthPages from "../components/AuthPages/AuthPages";
import { connect } from "react-redux";
import LoginForm from "../components/AuthPages/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Login = ({ loading }) => {
  const navigate = useNavigate();
  const imgPlaceholder = `https://images.sympla.com.br/61f959d748945.png`;

  const handleButton = () => {
    navigate("/register");
  };

  return loading ? (
    <Loading />
  ) : (
    <AuthPages img={imgPlaceholder} form={<LoginForm />} handleButton={handleButton} button="Registrar" />
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Login);
