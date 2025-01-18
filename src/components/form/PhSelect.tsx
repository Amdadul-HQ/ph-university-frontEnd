import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

export type TOptions = {value:string,label:string,disabled?:boolean}

type TPhSelectProps = {
    label:string;
    name:string;
    options : TOptions[]
}


const PhSelect = ({label,name,options}:TPhSelectProps) => {

    return (
        <Controller
        name={name}
        render={({field})=>(
            <Form.Item label={label}>
              <Select
                {...field}
                style={{ width: '100%' }}
                options={options}
                size="large"
              />
            </Form.Item>
        )}
        />
    );
};

export default PhSelect;