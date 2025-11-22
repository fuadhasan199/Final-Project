import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config'; 



const AuthProvider = ({children}) => {  

const[user,setUser]=useState(null)

 const registerUser=(email,password)=>{
     return  createUserWithEmailAndPassword(auth,email,password)
 } 


 const SignInUser=(email,password)=>{

     return signInWithEmailAndPassword(auth,email,password)
 } 

 const SignOutUser=()=>{
     return signOut(auth)
 } 


 useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth,(CurrentUser)=>{
        setUser(CurrentUser)
    }) 
   
    return()=>unsubcribe()


 },[])



 const authInfo={ 
    registerUser,
    SignInUser, 
    SignOutUser,
    user
     
 }

    return (
       <AuthContext value={authInfo}>
         {children}
       </AuthContext>
    );
};

export default AuthProvider;