import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const PhInput = ({type,name,label} : {type:string,name:string,label:string}) => {

    const {register} = useFormContext();

    return (
      <>
        <label htmlFor={name}>{label}:</label>
        <Input type={type} id={name} {...register(name)}></Input>
      </>
    ); 
    

};

export default PhInput;