import { Menu } from "antd";
import sidebarItemsGenerator from "../../../utils/function/sidebarItemsGenerator";
import { adminPaths } from "../../../routes/admin.routes";
import Sider from "antd/es/layout/Sider";
import { facultyPaths } from "../../../routes/faculty.routes";

const userRole = {
    ADMIN:"admin",
    FACULTY:"faculty",
    STUDENT:"student"
}
const Sidebar = () => {
    const role = 'faculty'
    let sidebarItems;
    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths,userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths,userRole.FACULTY);
            break;
        default:
            break;
    }

    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    );
};

export default Sidebar;