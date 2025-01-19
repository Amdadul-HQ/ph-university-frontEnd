import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../utils/type/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../utils/type/CommonType";

export type TTableData = Pick<TAcademicSemester,'name' | '_id' | 'startMonth' | 'endMonth'>

const AcademicSemester = () => {

    const [params,setParams] = useState<TQueryParam[] | undefined>(undefined);
    const {data,isLoading,isFetching} = useGetAllSemestersQuery(params);
    const semesterData = data?.data
    const tableData : TTableData[] = semesterData?.result?.map(({_id,name,startMonth,endMonth,year}:TAcademicSemester) => ({
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
        filters: [
          {
            text: "2024",
            value: "2024",
          },
          {
            text: "2025",
            value: "2025",
          },
          {
            text: "2026",
            value: "2026",
          },
        ],
      },
      {
        title: "Start Month",
        dataIndex: "startMonth",
      },
      {
        title: "End Month",
        dataIndex: "endMonth",
      },
      {
        title:'Action',
        key:"x",
        render:()=>{
          return <div><Button>Update</Button></div>
        }
      }
    ];


    const onChange: TableProps<TTableData>["onChange"] = (
      _pagination,
      filters,
      _sorter,
      extra
    ) => {
      if(extra.action === 'filter'){
        // console.log(filters);
        const queryParams : TQueryParam[] = [];
        filters.name?.forEach(item  => 
         queryParams.push({name:"name",value:item})
        )
        filters.year?.forEach((item) =>
          queryParams.push({ name: "year", value: item })
        );
        setParams(queryParams)
      }
    };
    if(isLoading || isFetching){
      return 
    }
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