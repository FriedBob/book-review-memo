import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookType, RootState } from "../types";

const DetailContainer = () => {
  const { id } = useParams();
  // bookId = isbn (String type)
  const bookId = String(id) || "unKnown";
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
};

export default DetailContainer;
