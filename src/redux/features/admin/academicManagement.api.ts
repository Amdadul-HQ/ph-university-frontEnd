import { TAcademicSemester } from "../../../utils/type/academicManagement.type";
import { TResponseRedux } from "../../../utils/type/CommonType";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        console.log(args);
        if(args){
            args.forEach((item) =>{
               params.append(item.name,item.value)
            })
        }
        return { 
        url: "/academic-semester",
        method: "GET",
        params:params
    }
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useGetAllSemestersQuery,useAddAcademicSemesterMutation} = academicManagementApi