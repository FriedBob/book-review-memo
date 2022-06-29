import { FormOutlined } from "@ant-design/icons";
import {
  message as messageDialog,
  Button,
  Input,
  InputRef,
  Layout,
  PageHeader,
} from "antd";
import TextArea, { TextAreaRef } from "antd/lib/input/TextArea";
import { useEffect, useRef } from "react";
import { BookReqType, BookType } from "../types";
import styles from "./Edit.module.css";

interface EditProps {
  book: BookType | undefined | null;
  loading: boolean;
  error: Error | null;
  edit: (book: BookReqType) => void;
  back: () => void;
  getBooks: () => void;
  logout: () => void;
}

const Edit: React.FC<EditProps> = ({
  book,
  loading,
  error,
  edit,
  getBooks,
  back,
  logout,
}) => {
  const titleRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaRef>(null);
  const authorRef = useRef<InputRef>(null);
  const urlRef = useRef<InputRef>(null);
  // bookId값(isbn)은 수정을 허용하지 않음
  const prevId: string = book!.isbn;

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
            <FormOutlined /> Edit Book
          </div>
        }
        subTitle="Edit Your Book"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button_logout}
          >
            Logout
          </Button>,
        ]}
      />

      <img src="/bg_list.png" className={styles.bg} alt="books" />

      <div className={styles.edit}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder="Title"
            ref={titleRef}
            defaultValue={book?.title || ""}
            className={styles.input}
          />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            placeholder="Comment"
            ref={messageRef}
            defaultValue={book?.contents || ""}
            className={styles.input}
            style={{ minHeight: 100 }}
          />
        </div>
        <div className={styles.input_author}>Author</div>
        <div className={styles.input_area}>
          <Input
            placeholder="Author"
            ref={authorRef}
            defaultValue={book?.authors || ""}
            className={styles.input}
          />
        </div>
        <div className={styles.input_url}>URL</div>
        <div className={styles.input_area}>
          <Input
            placeholder="URL"
            ref={urlRef}
            defaultValue={book?.url || ""}
            className={styles.input}
          />
        </div>
        <div className={styles.button_area}>
          <Button
            size="large"
            loading={loading}
            onClick={click}
            className={styles.button}
          >
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );

  function click() {
    const isbn = prevId;
    const title = titleRef.current!.input!.value;
    const contents = messageRef.current!.resizableTextArea!.props
      .value as string;
    const authors = authorRef.current!.input!.value;
    const url = urlRef.current!.input!.value;

    if (
      prevId === undefined ||
      title === undefined ||
      contents === undefined ||
      authors === undefined ||
      url === undefined
    ) {
      messageDialog.error("Please fill out all inputs");
      return;
    }
    edit({ isbn, title, contents, authors, url });
  }
};

export default Edit;
