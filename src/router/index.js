import { createBrowserRouter } from "react-router-dom";

// Routes

// Pages Routers
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Auth from "../pages/Auth/Auth.jsx";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Products from "../pages/Products/Products.jsx";

// Layouts
import WebsiteLayout from "../layouts/WebsiteLayout/WebsiteLayout";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

const routes = [
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/pay',
    element:<About />
  }
  // {
  //   path: "/",
  //   element: <WebsiteLayout />,
  //   // loader: rootLoader,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //       // loader: teamLoader,
  //     },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     {
  //       path: "contact",
  //       element: <Contact />,
  //     },
  //     {
  //       path: "/auth",
  //       element: <Auth />,
  //     },
  //   ],
  // },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   // loader: rootLoader,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "/users/all",
  //       element: <Users />,
  //     },
  //     {
  //       path: "categories",
  //       element: <Categories />,
  //     },
  //     {
  //       path: "/products",
  //       element: <Products />,
  //     },
  //   ],
  // },
];

const router = createBrowserRouter(routes);

export default router;
