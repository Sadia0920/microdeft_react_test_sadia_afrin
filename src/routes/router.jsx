import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllCourses from "../pages/allCourses";
import StoreCoursesForm from './../pages/StoreCoursesForm';
import RegistrationForm from './../pages/RegistrationForm';
import LoginForm from './../pages/LoginForm';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path:"/",
          element: <Home></Home>,
        },
        {
          path:"/allCourses",
          element: <AllCourses></AllCourses>,
        },
        {
          path:"/storeCoursesForm",
          element: <StoreCoursesForm></StoreCoursesForm>,
        },
        {
          path:"/registrationForm",
          element: <RegistrationForm></RegistrationForm>,
        },
        {
          path:"/loginForm",
          element: <LoginForm></LoginForm>,
        },
      ]
    },
  ]);

export default router;