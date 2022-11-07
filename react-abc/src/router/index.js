import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import LoginPage from "../pages/LoginPage";

export const privateRoutes = [
  { path: "/about", component: <AboutPage />, exact: true },
  { path: "/posts", component: <PostsPage />, exact: true },
  { path: "/posts/:id", component: <PostDetailsPage />, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: <LoginPage />, exact: true },
];
