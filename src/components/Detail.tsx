import { BookOutlined } from "@ant-design/icons";
import { Button, Layout, PageHeader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect } from "react";
import { BookType } from "../types";
import styles from "./Detail.module.css";

interface DetailProps {
  book: BookType | null | undefined;
  error: Error | null;
  back: () => void;
  edit: () => void;
  getBooks: () => void;
  logout: () => void;
}

const Detail: React.FC<DetailProps> = ({
  book,
  error,
  back,
  edit,
  getBooks,
  logout,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  if (book === null) {
    return null;
  }
  if (book === undefined) {
    return (
      <div>
        <h1>NotFound Book</h1>
      </div>
    );
  }

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <BookOutlined />
            {book?.title}
          </div>
        }
        subTitle={book?.authors}
        extra={[
          <Button
            key="2"
            type="primary"
            onClick={click}
            className={styles.button}
          >
            Edit
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button}
          >
            Logout
          </Button>,
        ]}
      />

      <img src="/bg_list.png" className={styles.bg} alt="books" />

      <div className={styles.detail}>
        <div className={styles.message_title}>My Comment</div>
        <div className={styles.message}>
          <TextArea
            rows={4}
            value={book?.contents}
            readOnly
            className={styles.message_textarea}
          />
        </div>
        <div className={styles.button_area}></div>
      </div>
    </Layout>
  );

  function click() {
    edit();
  }
};

export default Detail;
