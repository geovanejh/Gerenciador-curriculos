const INITIAL_STATE = {
  jobs: { jobs: [], currentPage: 1, totalPages: 0 },
  isLoading: true,
};

const ListJobsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LIST_JOBS') {
    return {
      ...state,
      jobs: action.jobs,
      isLoading: action.isLoading,
    };
  }

  return state;
};

export default ListJobsReducer;
