
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './../components/pages/Error/ErrorPage';
import LayoutPage from '../layouts/LayoutPage';
import HomePage from '../components/pages/Home/HomePage';
import SignUpForm from '../components/pages/SignUp/SignUpForm/SignUpForm';
import Jobs from './../components/pages/Jobs/Jobs';
import AboutPage from './../components/pages/about/AboutPage';
import ContactPage from './../components/pages/contacts/ContactPage';
import Favorite from './../components/pages/Favorites/Favorite';
export const routes = createBrowserRouter([
    {
        element: <LayoutPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <HomePage/>,
                path: "/"
            },
            {
                element: <Jobs/>,
                path: "/jobs"
            },
            {
                element: <AboutPage/>,
                path: "/about"
            },
            {
                element: <ContactPage/>,
                path: "/contact"
            },
            {
                element: <Favorite/>,
                path: "/favorive"
            }
        ]
    },
    {
        element: <SignUpForm/>,
        path: "/signup"
    }
])