import React from 'react';
import UseAuth from './UseAuth';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => { 
  

    const {user,loading}=UseAuth() 
    const location = useLocation();

    if(loading){
      return <div className="flex justify-center items-center h-screen">
               <span className="loading loading-spinner loading-xl"></span>
      </div> 
    }

  if(user){
    return children
  } 

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
  
};

export default Private;