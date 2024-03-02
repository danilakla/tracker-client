import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../page/Registration/Registration";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import { FormQuiz } from "../page/Quiz/FormQuiz";

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
,
{
  path:"/quize-forum",
  element: <FormQuiz/>
}
   
  ]);

  export default router;