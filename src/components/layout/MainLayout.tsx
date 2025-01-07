import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const items :MenuProps['items'] = [
    {
      key: "1",
      label: "Dashboard",
    },
    {
      key: "2",
      label: "Profile",
    },
    {
      key: "3",
      label: "User Management",
      children:[
        {
            key:'3.1',
            label:"Create Admin"
        },
        {
            key:'3.2',
            label:"Create Student"
        }
      ]
    },
  ];

  return (
    <Layout style={{height:'100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:'white',height:"4rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1 >PH University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: "24px 16px 0" }}>
        <Outlet/>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
