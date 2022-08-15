import { connect } from 'react-redux';
import { useEffect } from 'react';

import { HandleListJobs } from '../../store/actions/ListJobsAction';
import JobCardComponent from '../JobCard/JobCardComponent';

import { Container } from './ListOpenJobsComponent.style';

const ListOpenJobs = ({ jobs, dispatch }) => {
  const setup = async () => {
    HandleListJobs(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>
      {jobs &&
        jobs.map((job, index) => <JobCardComponent job={job} key={index} />)}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.ListJobsReducer.jobs,
});

export default connect(mapStateToProps)(ListOpenJobs);
