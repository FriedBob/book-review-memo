import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, Layout, PageHeader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styles from "./Add.module.css";

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout }) => {
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
          <Input className={styles.input} placeholder="Title" />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea className={styles.input} rows={4} placeholder="Comment" />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input className={styles.input} placeholder="Author" />
        </div>
      </div>
      <div className={styles.input_url}>
        URL
        <span className={styles.required}> *</span>
      </div>
      <div className={styles.input_area}>
        <Input className={styles.input} placeholder="URL" />
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
    </Layout>
  );

  function click() {}
};

export default Add;
