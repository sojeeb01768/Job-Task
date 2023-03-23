import { createBrowserRouter } from "react-router-dom";
import Success from "../component/Success";
import Varification from "../component/Varification";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/varification',
                element: <Varification></Varification>
            },
            {
                path: '/login',
                element: <Varification></Varification>
            },
           
          
        ]
    },
    {
        path: '/success',
        element: <Success></Success>
    }
])

export default router;