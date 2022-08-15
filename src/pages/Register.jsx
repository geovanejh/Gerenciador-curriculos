import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthPages from "../components/AuthPages/AuthPages";
import RegisterForm from "../components/AuthPages/RegisterForm/RegisterForm";
import Loading from "../components/Loading/Loading";

const Register = ({ loading }) => {
  const imgPlaceholder = `https://cdn.vox-cdn.com/thumbor/_5VL-ea6IV1erwRkQh-ca02vkjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206366/akrales_190913_3666_0126.jpg`;
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
