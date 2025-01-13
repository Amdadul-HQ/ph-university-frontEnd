import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLogingMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/function/verifyToken";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm({
      defaultValues: {
        id: "0001",
        password: "admin12345",
      },
    });

    const [login,{error}] = useLogingMutation();

    console.log('error',error);

    const onSubmit =async (data:Record<string,unknown>) =>{
        const userInfo = {
            id:data.id,
            password:data.password
        }
        const res = await login(userInfo).unwrap();
        const user  = verifyToken(res.data.accessToken);
        dispatch(setUser({user,token:res.data.accessToken}));
        navigate(`/${user?.role}/dashboard`);
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