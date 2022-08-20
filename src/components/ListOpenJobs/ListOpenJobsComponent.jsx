import { connect } from 'react-redux';
import { useEffect } from 'react';

import { HandleListJobs } from '../../store/actions/ListJobsAction';
import { HandleListApplicants } from '../../store/actions/ApplicantAction';
import JobCardComponent from '../JobCard/JobCardComponent';
import Loading from './../Loading/Loading';

import {
  Container,
  PaginationContainer,
  Msg,
  GridContainer
} from './ListOpenJobsComponent.style';

const ListOpenJobs = ({ isLoading, jobs, dispatch }) => {
  const handleLoadPage = (page) => {
    HandleListJobs(dispatch, page.selected + 1);
  };

  const setup = async () => {
    HandleListJobs(dispatch);
    HandleListApplicants(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Msg>Lista de vagas</Msg>
      <GridContainer>
        {jobs &&
          jobs.jobs.map((job, index) => (
            <JobCardComponent job={job} key={index} />
          ))}
      </GridContainer>
      <div>
        <PaginationContainer
          breakLabel="..."
          nextLabel="Próx >"
          onPageChange={handleLoadPage}
          pageRangeDisplayed={5}
          pageCount={jobs.totalPages | 0}
          previousLabel="< Ant"
          renderOnZeroPageCount={null}
        />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.ListJobsReducer.jobs,
  applicants: state.ApplicantReducer.applicants,
  isLoading: state.ListJobsReducer.isLoading,
});

export default connect(mapStateToProps)(ListOpenJobs);
