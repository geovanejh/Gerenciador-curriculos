const INITIAL_STATE = {
  applicant: {},
  applicants: [],
  applyJobStatus: false,
  isLoading: true,
};

const ApplicantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DETAIL_APPLICANT":
      return {
        ...state,
        applicant: action.applicant,
        isLoading: action.isLoading,
      };
    case "LIST_APPLICANTS":
      return {
        ...state,
        applicants: action.applicants,
        isLoading: action.isLoading,
      };
    case "APPLY_JOB":
      return {
        ...state,
        applyJobStatus: action.applyJobStatus,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default ApplicantReducer;
