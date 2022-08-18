import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import ListJobsReducer from "./ListJobsReducer";
import UtilsReducer from "./UtilsReducer";
import ApplicantReducer from "./ApplicantReducer";

export default combineReducers({
  AuthReducer,
  UtilsReducer,
  ListJobsReducer,
  ApplicantReducer,
});
