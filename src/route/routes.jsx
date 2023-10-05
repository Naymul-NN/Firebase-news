import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../sheard/Login";
import Register from "../sheard/Register";
import News from "../news/News";
import Private from "../privat/Private";



    const router = createBrowserRouter([
        {
          path: "/",
          element:<Layout></Layout> ,
          children:[
            {
                path:'/',
                element:<Home></Home> ,
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
              path:'/details/:_id',
              element: <Private><News></News></Private>,
              loader:() => fetch('/news.json')
            }
          ]
        },
      ]);
   

export default router;