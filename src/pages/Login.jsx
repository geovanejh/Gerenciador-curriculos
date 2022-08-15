import AuthPages from "../components/AuthPages/AuthPages";
import { connect } from "react-redux";

const Login = () => {
  return <AuthPages />;
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Login);
