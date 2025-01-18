import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../utils/type/academicManagement.type";

export type TTableData = Pick<TAcademicSemester,'name' | '_id' | 'startMonth' | 'endMonth'>

const AcademicSemester = () => {

    const {data:semesterData} = useGetAllSemestersQuery(undefined);
    const tableData = semesterData?.data?.map(({_id,name,startMonth,endMonth,year}) => ({
        _id,
        name,
        startMonth,
        endMonth,
        year
    }))


    const columns: TableColumnsType<TTableData> = [
      {
        title: "Name",
        dataIndex: "name",
        showSorterTooltip: { target: "full-header" },
      },
      {
        title: "Year",
        dataIndex: "year",
        defaultSortOrder: "descend",
      },
      {
        title: "Start Month",
        dataIndex: "startMonth",
      },
      {
        title: "End Month",
        dataIndex: "endMonth",
      },
    ];


    const onChange: TableProps<TTableData>["onChange"] = (
      pagination,
      filters,
      sorter,
      extra
    ) => {
      console.log("params", pagination, filters, sorter, extra);
    };
    return (
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    );
};

export default AcademicSemester;