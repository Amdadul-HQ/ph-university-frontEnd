import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


const adminRoutes2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name:"Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name:"Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name:"Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

export const adminRoutes = adminRoutes2.reduce((acc,item)=>{
    acc.push(item);
    if(item.path && item.element){
      acc.push({
        path:item.path,
        element:item.element
      });
    }
    if(item.children){
      item.children.forEach(child => {
        acc.push({
          path:child.path,
          element:child.element
        })
      })
    }
    return acc
},[])

// Hard coded.
// const adminRoutes = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ]; 

export default adminRoutes;