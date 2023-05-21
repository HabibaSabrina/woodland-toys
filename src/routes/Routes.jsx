import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToys from "../pages/AddToys/AddToys";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToys from "../pages/MyToys/UpdateMyToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('http://localhost:5000/toys')

        },
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
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/updatetoy/:id',
          element:<UpdateMyToys></UpdateMyToys>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/toy/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);
  export default router;