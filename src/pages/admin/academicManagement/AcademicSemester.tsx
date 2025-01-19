import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../utils/type/academicManagement.type";
import { useState } from "react";

export type TTableData = Pick<TAcademicSemester,'name' | '_id' | 'startMonth' | 'endMonth'>

const AcademicSemester = () => {

    const [params,setParams] = useState([]);
    const {data:semesterData} = useGetAllSemestersQuery(params);
    console.log(semesterData);
    const tableData = semesterData?.data?.result?.map(({_id,name,startMonth,endMonth,year}) => ({
        key:_id,
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
        filters: [
          { text: "Autumn", value: "Autumn" },
          { text: "Summer", value: "Summer" },
          { text: "Fall", value: "Fall" },
        ],
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
      if(extra.action === 'filter'){
        // console.log(filters);
        const queryParams = [];
        filters.name?.forEach(item => 
         queryParams.push({name:"name",value:item})
        )
        setParams(queryParams)
      }
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