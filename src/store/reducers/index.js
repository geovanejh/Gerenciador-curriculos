import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import UtilsReducer from "./UtilsReducer";

export default combineReducers({
  AuthReducer,
  UtilsReducer,
});
