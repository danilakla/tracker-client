import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../page/Registration/Registration";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import { FormQuiz } from "../page/Quiz/FormQuiz";
import { FormTest } from "../page/FormQuizeStudent/FormTest";
import { StudentForReviewPage } from "../page/StudentForReviewPage";
import StudentAttendence from "../page/CalculatPage/StudentAttendence";

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

,
{
  path:"/test-form",
  element: <FormTest/>
}

,
{
  path:"/show-review-student",
  element: <StudentForReviewPage/>
}

,
{
  path:"/StudentAttendence",
  element: <StudentAttendence/>
}


   
  ]);

  export default router;