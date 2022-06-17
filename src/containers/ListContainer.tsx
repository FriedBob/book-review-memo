import { useSelector } from "react-redux";
import List from "../components/List";
import { BookType, RootState } from "../types";

export default function ListContainer() {
  const books = useSelector<RootState, BookType[]>(
    (state) => state.books.books
  );
  return <List books={books} />;
}
