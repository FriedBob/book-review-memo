import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSaga } from "../redux/modules/books";
import { logout as logoutSaga } from "../redux/modules/auth";
import Detail from "../components/Detail";
import { goBack, push } from "connected-react-router";

const DetailContainer = () => {
  // page url로 받아오는 :id
  const { id } = useParams();
  const navigate = useNavigate();
  // bookId = isbn (String type)
  const bookId = String(id) || "unKnown";
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksSaga());
  }, [dispatch]);

  const back = useCallback(() => {
    // navigate(-1);
    dispatch(push("/"));
  }, [dispatch]);

  const edit = useCallback(() => {
    dispatch(push(`/edit/${id}`));
  }, [dispatch, id]);

  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  return (
    <Detail
      book={books === null ? null : books.find((book) => book.isbn === bookId)}
      error={error}
      getBooks={getBooks}
      back={back}
      edit={edit}
      logout={logout}
    />
  );
};

export default DetailContainer;
