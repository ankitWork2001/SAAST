import Layout from "../components/Admin/Layout.jsx";
import Dashboard from "../pages/Admin/Dashboard/Dashboard.jsx";
import Users from "../pages/Admin/Users/Users.jsx";
import UserProfile from "../pages/Admin/User-profile/Profile.jsx";
import Subscription from "../pages/Admin/Subscription/Subscription.jsx";
import Review from "../pages/Admin/review/Review.jsx";
import Settings from "../pages/Admin/setting/Setiing.jsx";

export const adminRoutes = {
  path: "/admin",
  element: <Layout />,
  children: [
    { index: true, element: <Dashboard /> },
    { path: "users", element: <Users /> },
    { path: "users/:id", element: <UserProfile /> },
    { path: "subscription", element: <Subscription /> },
    { path: "review", element: <Review /> },
    { path: "settings", element: <Settings /> },
  ],
};
