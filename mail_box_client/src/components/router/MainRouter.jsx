import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "../Signup";
import ErrorPage from "../ErrorPage";
import { Login } from "../Login";
import { AppLayout } from "../AppLayout";
import { ForgetPassword } from "../ForgetPassword";
export function MainRouter(){ 

const router=createBrowserRouter([
 {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            element:<Signup/>

        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'forget',
            element:<ForgetPassword/>
        }
        
    ]

 }

])

return <RouterProvider router={router}></RouterProvider>

}