import { BookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BookType } from "../types";

interface BookProps extends BookType {}

const Book: React.FC<BookProps> = ({ isbn: bookId, title, authors }) => (
  <div>
    <div>
      <Link to={`/book/${bookId}`}>
        <BookOutlined /> {title}
      </Link>
    </div>
    <div>
      <Link to={`/book/${bookId}`}>{authors}</Link>
    </div>
    <div></div>
  </div>
);

export default Book;
