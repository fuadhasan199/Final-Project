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
import Dashboard from './Auth/Dashboard.jsx'
import MyPercels from './Extra-Component/MyPercels.jsx' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Payment from './Extra-Component/Payment/Payment.jsx'

const queryClient = new QueryClient()


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
     } ,




    ]
   } ,
        {
      path:'/dashboard',
      element:<Private> <Dashboard></Dashboard> </Private> ,
      children:[
        {
          path:'myPercels',
          element:<MyPercels></MyPercels>
        } ,
        {
          path:'payment/:parcelId',
          element:<Payment></Payment>
        }
      ]
     }
 


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
      <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
   </QueryClientProvider>
  </StrictMode>,
)
