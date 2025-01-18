import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Flex } from "antd";


const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
    }

    return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm onSubmit={onSubmit}>
            <PhInput label="name" type="text" name="name" />
            <PhInput label="year" type="text" name="year" />
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default CreateAcademicSemester;