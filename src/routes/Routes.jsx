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
import JobDetails from "../components/pages/JobDetails/JobDetails";
import AddJob from "../components/pages/AddJob/AddJob";
import JibikaContext from "../context/JibikaContext";
import EdtiJob from "../components/pages/editJob/EditJobs";
import ApplyForJob from "../components/pages/apply/ApplyForJob";

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
        element: (
          <JibikaContext>
            <Jobs />
          </JibikaContext>
        ),
        path: "/jobs",
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        element: (
          <PrivateRoute>
            <EdtiJob />
          </PrivateRoute>
        ),
        path: "/jobs/:editJob",
        loader: ({ params }) =>
          fetch(`http://localhost:9000/jobs/${params.editJob}`),
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
      {
        element: <AddJob />,
        path: "/addjob",
      },
      {
        element: <ApplyForJob />,
        path: "/apply",
      },
      {
        element: (
          <JibikaContext>
            <JobDetails />
          </JibikaContext>
        ),
        path: "/jobdetails",
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
