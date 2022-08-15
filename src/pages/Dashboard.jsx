import ListOpenJobs from '../components/ListOpenJobs/ListOpenJobsComponent';
import DashboardContainer from './Dashboard.style';

const Dashboard = () => {
  return (
    <DashboardContainer style={{ backgroundColor: '#f4f2f2' }}>
      <ListOpenJobs />
    </DashboardContainer>
  );
};

export default Dashboard;
