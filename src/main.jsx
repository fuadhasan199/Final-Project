import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import MainRoot from './Root/MainRoot.jsx'
import Service from './Page/Service.jsx'
import Coverage from './Page/Coverage.jsx'


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
      element:<Coverage></Coverage>
     }




    ]
   }
 


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
