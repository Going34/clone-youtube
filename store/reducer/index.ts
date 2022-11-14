
import { combineReducers } from "redux";
import HandelComment from "./HandelComment";
import HandelVideoData from "./HandelVideoData";

const rootReducer = combineReducers({
  HandelVideoData:HandelVideoData,
  HandelComment:HandelComment
})
export default rootReducer