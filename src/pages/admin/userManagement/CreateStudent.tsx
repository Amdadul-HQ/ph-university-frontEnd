import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";

const CreateStudent = () => {

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }

    return (
        <PhForm onSubmit={onSubmit}>
            <PhInput type="text" name="name" label="Stuent Name" />
        </PhForm>
    );
};

export default CreateStudent;