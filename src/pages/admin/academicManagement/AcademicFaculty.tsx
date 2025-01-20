import { LoadingOutlined } from "@ant-design/icons";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table, TableColumnsType } from "antd";
import { TAcademicFaculty } from "../../../utils/type/academicManagement.type";

export type TTableData = Pick<TAcademicFaculty,
  "name" | "_id" | "createdAt" | "updateAt">;

const AcademicFaculty = () => {
    const {data,isLoading,isFetching} = useGetAllFacultyQuery(undefined);
    if (isLoading || isFetching) {
      return <LoadingOutlined />;
    }
    const academicFacultys = data?.data
    const columns: TableColumnsType<TTableData> = [
      {
        title: "Name",
        dataIndex: "name",
        showSorterTooltip: { target: "full-header" },
      },
      {
        title: "Create Date",
        dataIndex: "createdAt",
        defaultSortOrder: "descend",
      },
 
      {
        title: "Update Date",
        dataIndex: "updatedAt",
      },
      {
        title: "Action",
        key: "x",
        render: () => {
          return (
            <div>
              <Button>Update</Button>
            </div>
          );
        },
      },
    ];

    return (
      <Table<TTableData>
        columns={columns}
        dataSource={academicFacultys}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    );
};

export default AcademicFaculty;