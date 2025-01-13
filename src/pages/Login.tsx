import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLogingMutation } from "../redux/features/auth/authApi";

const Login = () => {

    const { register, handleSubmit } = useForm({
      defaultValues: {
        id: "0001",
        password: "admin12345",
      },
    });

    const [login,{data,error}] = useLogingMutation();

    console.log('data',data);
    console.log('error',error);

    const onSubmit =async (data) =>{
        const userInfo = {
            id:data.id,
            password:data.password
        }
        login(userInfo);
        console.log(userInfo);
    }
    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('id')}></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" {...register('password')}></input>
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;