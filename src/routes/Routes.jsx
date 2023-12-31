import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./../components/pages/Error/ErrorPage";
import LayoutPage from "../layouts/LayoutPage";
import HomePage from "../components/pages/Home/HomePage";
import SignUpForm from "../components/pages/SignUp/SignUpForm/SignUpForm";
import Jobs from "./../components/pages/Jobs/Jobs";
import AboutPage from "./../components/pages/about/AboutPage";
import ContactPage from "./../components/pages/contacts/ContactPage";
import Favorite from "./../components/pages/Favorites/Favorite";
import SignInForm from "../components/pages/SignUp/signIn/SignInForm";
import UserProfile from "../components/pages/userProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <Jobs />,
        path: "/jobs",
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        element: <AboutPage />,
        path: "/about",
      },
      {
        element: <ContactPage />,
        path: "/contact",
      },
      {
        element: <Favorite />,
        path: "/favorite",
      },
      {
        element: <UserProfile />,
        path: "/userProfile",
      },
    ],
  },
  {
    element: <SignUpForm />,
    path: "/signup",
  },
  {
    element: <SignInForm />,
    path: "/signin",
  },
]);
