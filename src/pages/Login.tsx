import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useLogingMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/function/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();



    const [login] = useLogingMutation();


    const onSubmit =async (data:FieldValues) =>{
        const toastId = toast.loading("Logging in")
        try{
            const userInfo = {
              id: data.id,
              password: data.password,
            };
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(setUser({ user, token: res.data.accessToken }));
            toast.success("Login Successfull",{id:toastId,duration:2000})
            navigate(`/${user?.role}/dashboard`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch(error){
            toast.error("Something want wrong",{id:toastId,duration:2000})
        }
    }
    return (
        <PhForm 
        onSubmit={onSubmit}
        >
            <div>
                <PhInput type="text" name="id" label="ID"/>
            </div>
            <div>
                <PhInput type="text" name="password" label="Password"/>
            </div>
            <Button htmlType="submit">Login</Button>
        </PhForm>
    );
};

export default Login;