import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import MainRoot from './Root/MainRoot.jsx'
import Service from './Page/Service.jsx'
import Coverage from './Page/Coverage.jsx'
import Register from './Sign/Register.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
import Login from './Sign/Login.jsx'
import About from './Page/About.jsx'
import Private from './Auth/Private.jsx'
import Send_Percel from './Page/Send_Percel.jsx'


const router=createBrowserRouter([
 
   {
    path:'/',
    element:<MainRoot></MainRoot>, 
    children:[

     {
      path:'/',
      element:<Service></Service>
     },
     {
      path:'/Coverage',
      element:<Private>
        <Coverage></Coverage>
      </Private>,
      loader: ()=>fetch('/warehouses.json') .then(res=>res.json())
     } ,
     {
      path:'/register',
      element:<Register></Register>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/aboutUs', 
      element:<About></About>,
     }
     ,
     {
      path:'/Send_parcel',
      element:<Private> 
        <Send_Percel></Send_Percel>
      </Private> ,
      loader: ()=>fetch('/warehouses.json') .then(res=>res.json())
     }



    ]
   }
 


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
