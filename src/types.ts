import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BookType {
  isbn: string;
  title: string;
  authors: string;
  contents: string;
  createdAt: string;
  url: string;
}

export interface BookReqType {
  isbn: string;
  title: string;
  contents: string;
  authors: string;
  url: string;
}

export interface deleteReqType {
  isbn: string;
  title: string;
  authors: string;
}
