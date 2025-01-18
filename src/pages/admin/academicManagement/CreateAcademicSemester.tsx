import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect, { TOptions } from "../../../components/form/PhSelect";

const nameOptions:TOptions[] = [
    {
        value:"01",
        label:"Autumn"
    },
    {
        value:"02",
        label:"Summer"
    },
    {
        value:"03",
        label:"Fall"
    }
]

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        const name = nameOptions[Number(data.name) - 1].label
        const semesterData = {
            name:name,
            code:data.name
        }
        console.log(semesterData);
    }
    return (
      <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm onSubmit={onSubmit}>
            <PhSelect options={nameOptions} name="name" label="name"/>
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default CreateAcademicSemester;