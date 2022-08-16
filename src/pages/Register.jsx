import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthPages from "../components/AuthPages/AuthPages";
import RegisterForm from "../components/AuthPages/RegisterForm/RegisterForm";
import Loading from "../components/Loading/Loading";

const Register = ({ loading }) => {
  const imgPlaceholder = `https://images.sympla.com.br/61f959d748945.png`;
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/login");
  };

  return loading ? (
    <Loading />
  ) : (
    <AuthPages img={imgPlaceholder} form={<RegisterForm />} button="Login" handleButton={handleButton} />
  );
};

const mapStateToProps = (state) => ({
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Register);
