import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button } from "antd";


const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
    }

    return (
        <PhForm onSubmit={onSubmit}>
            <PhInput label="namee" type="text" name="name"/>
            <Button htmlType="submit">Submit</Button>
        </PhForm>
    );
};

export default CreateAcademicSemester;