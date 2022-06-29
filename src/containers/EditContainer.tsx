import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookReqType, BookType, RootState } from "../types";
import {
  editBook as editBookSaga,
  getBooks as getBooksSaga,
} from "../redux/modules/books";
import { logout as logoutSaga } from "../redux/modules/auth";
import Edit from "../components/Edit";

const EditContainer = () => {
  const { id } = useParams();
  const bookId = String(id) || "unknown";
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );
  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksSaga());
  }, [dispatch]);

  const edit = useCallback(
    (book: BookReqType) => {
      dispatch(editBookSaga(book));
    },
    [dispatch]
  );

  const back = useCallback(() => {
    dispatch(push("/"));
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  return (
    <Edit
      book={books === null ? null : books.find((book) => book.isbn === bookId)}
      loading={loading}
      error={error}
      edit={edit}
      getBooks={getBooks}
      back={back}
      logout={logout}
    />
  );
};

export default EditContainer;
