import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLogingMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import useToken from "antd/es/theme/useToken";

const Login = () => {

    const dispath = useAppDispatch()
    const {register,handleSubmit } = useForm({
        defaultValues:{
            userId:'A-0002',
            token:'af;aafafjjfas;dfjasf;asfjas'
        }
    });

    const [loging,{data,error}] = useLogingMutation();
    const onSubmit =async (data) =>{
        const userInfo = {
            userId:data.id,
            password:data.password
        }
        const res = await loging(userInfo).unwrap();
        dispatchEvent({ auth: {}, token: res.data.accessToken });

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('id')}></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="" id="password" {...register('password')}></input>
            </div>
            <Button >Login</Button>
        </form>
    );
};

export default Login;