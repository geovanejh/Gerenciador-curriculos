import { ActionTypes } from '../ActionTypes';

const INITIAL_STATE = {
  applicant: {},
  applicants: [],
  applyJobStatus: false,
  unlinkJobStatus: false,
  isLoading: true,
};

const ApplicantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.detailApplicant:
      return {
        ...state,
        applicant: action.applicant,
        isLoading: action.isLoading,
      };
    case ActionTypes.listApplicants:
      return {
        ...state,
        applicants: action.applicants,
        isLoading: action.isLoading,
      };
    case ActionTypes.applyJob:
      return {
        ...state,
        applyJobStatus: action.applyJobStatus,
        isLoading: action.isLoading,
      };
    case ActionTypes.unlinkJob:
      return {
        ...state,
        unlinkJobStatus: action.unlinkJobStatus,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default ApplicantReducer;
