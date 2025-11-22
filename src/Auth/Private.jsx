import React from 'react';
import UseAuth from './UseAuth';
import { Navigate } from 'react-router';

const Private = ({children}) => { 

    const {user}=UseAuth() 

  if(user){
    return children
  } 

    return <Navigate to={'/login'}></Navigate>
  
};

export default Private;