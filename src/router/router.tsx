import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../page/Registration/Registration";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path:"/home",
      element: <Home/>
    }
  ]);

  export default router;