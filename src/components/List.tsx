import { Button, PageHeader, Table } from "antd";
import Layout from "antd/lib/layout/layout";
import { useEffect } from "react";
import { BookType } from "../types";
import Book from "./Book";

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  getBooks: () => void;
}

const List: React.FC<ListProps> = ({ books, loading, getBooks }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const goAdd = () => {};
  const logout = () => {};

  return (
    <Layout>
      <PageHeader
        title={<div>Book Lists</div>}
        extra={[
          <Button key="2" type="primary" onClick={goAdd}>
            Add Book
          </Button>,
          <Button key="1" type="primary" onClick={logout}>
            Logout
          </Button>,
        ]}
      />
      <Table
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
