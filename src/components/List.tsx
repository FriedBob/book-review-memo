import { Button, PageHeader, Table } from "antd";
import Layout from "antd/lib/layout/layout";
import { useEffect } from "react";
import { BookType } from "../types";
import Book from "./Book";
import styles from "./List.module.css";

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
}

const List: React.FC<ListProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    // state books에 있는 에러가 에러객체일 경우에 대한 처리
    if (error) {
      logout();
    }
  }, [error, logout]);

  const goAdd = () => {};

  return (
    <Layout>
      <PageHeader
        title={<div>Book Lists</div>}
        extra={[
          <Button
            className={styles.button}
            key="2"
            type="primary"
            onClick={goAdd}
          >
            Add Book
          </Button>,
          <Button
            className={styles.button}
            key="1"
            type="primary"
            onClick={logout}
          >
            Logout
          </Button>,
        ]}
      />
      <Table
        className={styles.table}
        dataSource={books || []}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: (text, record) => <Book {...record} />,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  );
};

export default List;
