import { ForkOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  InputRef,
  Layout,
  PageHeader,
  message as messageDialog,
} from "antd";
import TextArea, { TextAreaRef } from "antd/lib/input/TextArea";
import { useRef } from "react";
import styles from "./Add.module.css";
import { BookReqType } from "../types";

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  // adding Form Refs
  const titleRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaRef>(null);
  const authorRef = useRef<InputRef>(null);
  const urlRef = useRef<InputRef>(null);

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined /> Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            className={styles.button_logout}
            key="1"
            type="primary"
            onClick={logout}
          >
            Logout
          </Button>,
        ]}
      />

      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input className={styles.input} placeholder="Title" ref={titleRef} />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            className={styles.input}
            rows={4}
            placeholder="Comment"
            ref={messageRef}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input
            className={styles.input}
            placeholder="Author"
            ref={authorRef}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input className={styles.input} placeholder="URL" ref={urlRef} />
        </div>
        <div className={styles.button_area}>
          <Button
            className={styles.button}
            size="large"
            loading={loading}
            onClick={click}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );

  function click() {
    const title = titleRef.current!.input?.value;
    const contents = messageRef.current!.resizableTextArea!.props
      .value as string;
    const authors = authorRef.current!.input?.value;
    const url = urlRef.current!.input?.value;

    if (
      title === undefined ||
      contents === undefined ||
      authors === undefined ||
      url === undefined
    ) {
      messageDialog.error("Please fill out all inputs");
      return;
    }

    add({
      title,
      contents,
      authors,
      url,
    });
  }
};

export default Add;
