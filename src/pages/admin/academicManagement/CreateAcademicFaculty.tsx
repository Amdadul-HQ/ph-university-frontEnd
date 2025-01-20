import { toast } from "sonner";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schema/academicManagement.schema";
import PhSelect from "../../../components/form/PhSelect";
import { facultyOptions } from "../../../constants/faculty";


const CreateAcademicFaculty = () => {
     const [addAcademicFaculty] = useAddAcademicFacultyMutation();
     const onSubmit: SubmitHandler<FieldValues> = async (data) => {
       const toastId = toast.loading("Adding...");
       const academicFaculty = {
         name: data.name,
       };
       try {
         const res = (await addAcademicFaculty(
           academicFaculty
         ));
         if (res?.error) {
           return toast.error(res?.error?.data?.message, { id: toastId });
         }
         toast.success("semester added successfully!!", { id: toastId });
       } catch (error) {
         if (error) {
           toast.error("something went worng", { id: toastId });
         }
       }
     };
    return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm
            resolver={zodResolver(academicFacultySchema)}
            onSubmit={onSubmit}
          >
            <PhSelect options={facultyOptions} name="name" label="Name" />
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default CreateAcademicFaculty;