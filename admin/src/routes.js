import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import CategoryPage from "./pages/CategoryPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import PostsPage from "./pages/PostsPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import SkillPage from "./pages/SkillPage";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: <UserPage /> },
        { path: "posts", element: <PostsPage /> },
        { path: "categories", element: <CategoryPage /> },
        { path: "skills", element: <SkillPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to='/404' /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to='/404' replace />,
    },
  ]);

  return routes;
}
