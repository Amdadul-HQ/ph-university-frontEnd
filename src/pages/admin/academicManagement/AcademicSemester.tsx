import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {

    const {data:semesterData} = useGetAllSemestersQuery(undefined);
    const tableData = semesterData?.data.map(({_id,name,startMonth,endMonth,year}) => ({
        _id,
        name,
        startMonth,
        endMonth,
        year
    }))
    interface DataType {
      key: React.Key;
      name: string;
      age: number;
      address: string;
    }

    const columns: TableColumnsType<DataType> = [
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


    const onChange: TableProps<DataType>["onChange"] = (
      pagination,
      filters,
      sorter,
      extra
    ) => {
      console.log("params", pagination, filters, sorter, extra);
    };
    return (
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    );
};

export default AcademicSemester;