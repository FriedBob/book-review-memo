import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import auth from "./auth";

// const reducer = (history: History<unknown>) =>
const reducer = (history: History) =>
  combineReducers({
    auth: auth,
    router: connectRouter(history),
  });

export default reducer;
