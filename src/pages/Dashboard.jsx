import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { handleLogout } from "../store/actions/AuthAction";
import ListOpenJobs from "../components/ListOpenJobs/ListOpenJobsComponent";
import DashboardContainer from "./Dashboard.style";
import { toast } from "react-toastify";

const Dashboard = ({ loading, dispatch }) => {
  const navigate = useNavigate();
  console.log(loading);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <DashboardContainer style={{ backgroundColor: "#f4f2f2" }}>
        <ListOpenJobs />
      </DashboardContainer>
      <button onClick={() => handleLogout(dispatch, navigate)}>deslogar</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Dashboard);
