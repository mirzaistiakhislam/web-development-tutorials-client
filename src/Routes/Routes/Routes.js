import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PremiumCheckout from "../../Pages/Others/PremiumCheckout/PremiumCheckout";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://web-development-tutorials-server.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://web-development-tutorials-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://web-development-tutorials-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/premium/:id',
                element: <PrivateRoute><PremiumCheckout></PremiumCheckout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://web-development-tutorials-server.vercel.app/courses/${params.id}`)

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    },
    {
        path: '*',
        element: <div>this route not found</div>
    }
])