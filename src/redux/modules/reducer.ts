import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";

// const reducer = (history: History<unknown>) =>
const reducer = (history: History) =>
  combineReducers({
    auth: auth,
    books,
    router: connectRouter(history),
  });

export default reducer;
