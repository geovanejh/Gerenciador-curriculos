import { connect } from "react-redux";
import { useEffect } from "react";

import { HandleListJobs } from "../../store/actions/ListJobsAction";
import { HandleListApplicants } from "../../store/actions/ApplicantAction";
import JobCardComponent from "../JobCard/JobCardComponent";
import Loading from "./../Loading/Loading";

import {
  Container,
  PaginationContainer,
  Msg,
  GridContainer,
} from "./ListOpenJobsComponent.style";

const ListOpenJobs = ({ isLoading, jobs, dispatch, loading }) => {
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

  return loading ? (
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
          nextLabel=">"
          onPageChange={handleLoadPage}
          pageRangeDisplayed={5}
          pageCount={jobs.totalPages | 0}
          previousLabel="<"
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
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(ListOpenJobs);
