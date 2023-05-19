import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToys from "../pages/AddToys/AddToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addtoys',
          element:<AddToys></AddToys>
        }
      ]
    },
  ]);
  export default router;