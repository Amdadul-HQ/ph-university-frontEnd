import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const { Header, Content } = Layout;
  const handleLogout = () =>{
    dispatch(logOut())
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar/>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Log out</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
