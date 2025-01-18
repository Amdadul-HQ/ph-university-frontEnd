import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import { TPhSelectProps } from "../../constants/global";




const PhSelect = ({label,name,options}:TPhSelectProps) => {

    return (
      <div style={{marginTop:"50px",marginBottom:"60px"}}>
        <Controller
          name={name}
          render={({ field,fieldState:{error} }) => (
            <Form.Item layout="vertical" label={label}>
              <Select
                {...field}
                style={{ width: "100%" }}
                options={options}
                size="large"
              />
              {error && <span style={{color:'red'}}>{error.message}</span>}
            </Form.Item>
          )}
        />
      </div>
    );
};

export default PhSelect;