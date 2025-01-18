import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps ={type:string,name:string,label:string}

const PhInput = ({type,name,label} : TInputProps ) => {

    return (
      <div style={{marginBottom:"10px"}}>
        <Controller
        name={name}
        render={({field}) => (<Form.Item layout="vertical" label={label}>
          <Input {...field} type={type} id={name}/>
        </Form.Item>
        )
        }
        />
      </div>
    ); 
    

};

export default PhInput;