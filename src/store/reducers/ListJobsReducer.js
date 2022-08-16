const INITIAL_STATE = {
  jobs: [],
  isLoading: true,
};

const ListJobsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LIST_JOBS') {
    return {
      jobs: action.jobs,
      isLoading: action.isLoading,
    };
  }

  return state;
};

export default ListJobsReducer;
