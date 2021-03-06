import { goBack, push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Add from "../components/Add";
import { BookReqType, RootState } from "../types";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { addBook as addBookSagaStart } from "../redux/modules/books";

const AddContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const back = useCallback(() => {
    dispatch(push("/"));
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book));
    },
    [dispatch]
  );
  return <Add loading={loading} back={back} logout={logout} add={add} />;
};

export default AddContainer;
