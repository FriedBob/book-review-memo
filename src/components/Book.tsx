import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BookType } from "../types";
import moment from "moment";
import { Button, Tooltip } from "antd";
import styles from "./Book.module.css";

interface BookProps extends BookType {}

const Book: React.FC<BookProps> = ({
  isbn: bookId,
  title,
  authors: author,
  createdAt,
  url,
}) => (
  <div className={styles.book}>
    <div className={styles.title}>
      <Link className={styles.link_detail_title} to={`/book/${bookId}`}>
        <BookOutlined /> {title}
      </Link>
    </div>
    <div className={styles.author}>
      <Link className={styles.link_detail_author} to={`/book/${bookId}`}>
        {author}
      </Link>
    </div>
    <div className={styles.created}>
      {moment(createdAt).format("MM-DD-YYYY hh:mm a")}
    </div>
    <div className={styles.tooltips}>
      <Tooltip title="Url">
        <a
          className={styles.link_url}
          href={url}
          target="_BLANK"
          rel="noreferrer"
        >
          <Button
            className={styles.button_url}
            size="small"
            type="primary"
            shape="circle"
            icon={<HomeOutlined />}
          />
        </a>
      </Tooltip>
      <Tooltip title="Edit">
        <Button
          className={styles.button_edit}
          size="small"
          shape="circle"
          icon={<EditOutlined />}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <Button
          className={styles.button_delete}
          size="small"
          type="primary"
          shape="circle"
          danger
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </div>
  </div>
);

export default Book;
