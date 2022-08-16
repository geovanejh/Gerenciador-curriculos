import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Dashboard = ({ loading, dispatch }) => {
  const navigate = useNavigate();
  console.log(loading);

  return loading ? <Loading /> : <div>Dashboard</div>;
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Dashboard);
