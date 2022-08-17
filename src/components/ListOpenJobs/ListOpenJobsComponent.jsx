import { connect } from "react-redux";
import { useEffect } from "react";

import { HandleListJobs } from "../../store/actions/ListJobsAction";
import JobCardComponent from "../JobCard/JobCardComponent";

import {
  Container,
  PaginationContainer,
  Msg,
} from "./ListOpenJobsComponent.style";

const ListOpenJobs = ({ jobs, dispatch }) => {
  const handleLoadPage = (page) => {
    HandleListJobs(dispatch, page.selected + 1);
  };

  const setup = async () => {
    HandleListJobs(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>
      <Msg>Lista de vagas</Msg>
      {jobs &&
        jobs.jobs.map((job, index) => (
          <JobCardComponent job={job} key={index} />
        ))}
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
});

export default connect(mapStateToProps)(ListOpenJobs);
