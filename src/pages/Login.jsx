import AuthPages from "../components/AuthPages/AuthPages";
import { connect } from "react-redux";
import { handleLogin } from "../store/actions/AuthAction";

const Login = () => {
  return <AuthPages />;
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Login);
