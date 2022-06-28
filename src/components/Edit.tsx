import { FormOutlined } from "@ant-design/icons";
import { Layout, PageHeader } from "antd";

interface EditProps {}

const Edit: React.FC<EditProps> = () => {
  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <FormOutlined /> Edit Book
          </div>
        }
      ></PageHeader>
    </Layout>
  );

  function back() {}
};

export default Edit;
