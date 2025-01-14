import { Button, Row } from "antd";
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

    const defaultValues = {
      id: "0001",
      password: "admin12345",
    };

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
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PhForm defaultValues={defaultValues} onSubmit={onSubmit}>
          <PhInput type="text" name="id" label="ID" />
          <PhInput type="text" name="password" label="Password" />
          <Button htmlType="submit">Login</Button>
        </PhForm>
      </Row>
    );
};

export default Login;