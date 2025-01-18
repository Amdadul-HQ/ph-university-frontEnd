import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions, semesterOptions, yearOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod"
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../utils/type/CommonType";
import { TAcademicSemester } from "../../../utils/type/academicManagement.type";

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        const toastId = toast.loading('Adding...')
        const name = semesterOptions[Number(data?.name) - 1].label;
        const semesterData = {
            name:name,
            code:data?.name,
            year:data?.year,
            startMonth:data?.startMonth,
            endMonth:data?.endMonth
        }
        try{
          const res = await addAcademicSemester(semesterData) as TResponse<TAcademicSemester>;
          if(res?.error){
            return toast.error(res?.error?.data?.message,{id:toastId})
          }
          toast.success("semester added successfully!!",{id:toastId})
        }
        catch(error){
          if(error){
            toast.error('something went worng',{id:toastId})
          }
        }
    }
    
    return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm resolver={zodResolver(academicSemesterSchema)} onSubmit={onSubmit}>
            <PhSelect options={semesterOptions} name="name" label="Name" />
            <PhSelect options={yearOptions} name="year" label="Year" />
            <PhSelect
              options={monthOptions}
              label="Start Month"
              name="startMonth"
            />
            <PhSelect
              options={monthOptions}
              label="End Month"
              name="endMonth"
            />
            <Button htmlType="submit">
              Submit
            </Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default CreateAcademicSemester;