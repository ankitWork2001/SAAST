import Layout from "../components/User/Layout.jsx";
import Dashboard from "../pages/User/Dashboard/Dashboard";
import Settings from "../pages/User/setting/Setiing.jsx";
import Subscription from "../pages/Admin/Subscription/Subscription.jsx";
import Profile from "../pages/User/User-profile/Profile.jsx"




export const userRoutes = {
  path: "/user",
  element: <Layout />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "settings", element: <Settings /> },
    { path: "profile", element: <Profile /> },
    { path: "subscription", element: <Subscription /> },
    
  ],
};