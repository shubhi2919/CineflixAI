import React from 'react'
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';
//how to provide routes in react app
import { RouterProvider } from 'react-router-dom';
import Header from './Header';

const Body = () => {
  //set up the routes
  const appRoute = createBrowserRouter([
    {   //show login page
        path:"/",
        element:<Login/>
    },
    {   //this route will be authenticated route if you are logged 
    // in then only you can see this page
        path:"/browse",
        element:<Browse/>
    }
  ])
    
  return (
    <div>
    {/* <Login/>
    <Browse/> */}
    {/* instead of login and browse tags give routerprovider */}
    <RouterProvider router={appRoute}/>
    </div>

  )
}

export default Body;