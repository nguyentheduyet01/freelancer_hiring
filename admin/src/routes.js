import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import CategoryPage from "./pages/CategoryPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import PostsAprevePage from "./pages/PostsAprevePage";
import PostsPage from "./pages/PostsPage";
import SkillPage from "./pages/SkillPage";
import UserPage from "./pages/UserPage";

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
        { path: "approve", element: <PostsPage /> },
        { path: "posts", element: <PostsAprevePage /> },
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
