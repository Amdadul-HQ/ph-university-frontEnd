import { Form, Select } from "antd";


const PhSelect = ({label}:{label:string}) => {

    return (
      <Form.Item label={label}>
        <Select
          style={{ width: '100%' }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
    );
};

export default PhSelect;