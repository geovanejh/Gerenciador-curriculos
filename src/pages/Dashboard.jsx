import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { handleLogout } from "../store/actions/AuthAction";
import ListOpenJobs from "../components/ListOpenJobs/ListOpenJobsComponent";

const Dashboard = ({ loading, dispatch }) => {
  const navigate = useNavigate();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <ListOpenJobs />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Dashboard);
