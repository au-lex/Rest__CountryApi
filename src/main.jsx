import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import CountryDetail from "./Pages/CtryDetail.jsx"



const router = createBrowserRouter([
  
   
      {
        path: "/Countrydetail",
        element: <CountryDetail/>,
      },

    

]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
