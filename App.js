import React ,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestMenu from "./src/components/RestMenu";
import Shimmer from "./src/components/shimmer";

const Grocery = lazy(()=> import('./src/components/Grocery'))



const AppLayout =()=>{
  return(
    <div className="app">
      <Header />
     <Outlet />
    </div>
  )
}

const router  = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/restaurant/:id',
        element:<RestMenu />,
      },
      {
        path:'/bringme-mart',
        element:<Suspense fallback={<Shimmer/>}>
          <Grocery />
        </Suspense>,
      },
    
    ],
    errorElement:<Error />,
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <RouterProvider router={router} />)