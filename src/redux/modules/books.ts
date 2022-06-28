import { push } from "connected-react-router";
import { Action } from "redux";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import BookService from "../../services/BookService";
import { BookReqType, BooksState, BookType } from "../../types";

// 작동여부 판단을 위한 임시 title(책 제목)값 고정
const title: string = "스티브 잡스";

interface ResponseType {
  documents: [];
  // meta: {};
}

const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
};

const prefix = "my-books/books";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<BooksState, BookType[]>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      ...state,
      books: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga

export const { getBooks, addBook, deleteBook } = createActions(
  "GET_BOOKS",
  "ADD_BOOK",
  "DELETE_BOOK",
  {
    prefix,
  }
);

function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const response: ResponseType = yield call(
      BookService.getBooks,
      token,
      title
    );
    const books: BookType[] = response.documents;
    const prevBooks: BookType[] = yield select((state) => state.books.books);
    let newBooks: BookType[] = [];

    if (prevBooks !== null) {
      newBooks = books.concat(prevBooks);
    } else {
      newBooks = books;
    }

    yield put(success(newBooks));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN ERROR")));
  }
}

function* addBookSaga(action: any) {
  try {
    yield put(pending());
    const prevBooks: BookType[] = yield select((state) => state.books.books);
    yield put(success([...prevBooks, action.payload]));
    yield put(push("/"));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN ERROR")));
  }
}

function* deleteBookSaga(action: any) {
  try {
    const bookId = action.payload.isbn;
    const bookTitle = action.payload.title;
    const bookAuthors = action.payload.authors;
    console.log(`delete로 넘어간 action: ${action.payload}`);

    yield put(pending());
    const prevBooks: BookType[] = yield select((state) => state.books.books);
    if (bookId === undefined || bookId === null) {
      // bookId가 없을경우 임시로 book의 title과 authors를 key로 사용
      yield put(
        success(
          prevBooks.filter(
            (book) => book.title !== bookTitle && book.authors !== bookAuthors
          )
        )
      );
    } else {
      yield put(success(prevBooks.filter((book) => book.isbn !== bookId)));
    }
  } catch (error) {
    yield put(fail(new Error("UNKNOWN ERROR")));
  }
}

export function* booksSaga() {
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga);
  yield takeEvery(`${prefix}/ADD_BOOK`, addBookSaga);
  yield takeEvery(`${prefix}/DELETE_BOOK`, deleteBookSaga);
}
