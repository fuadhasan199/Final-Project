import React from 'react';
import { NavLink } from 'react-router';
import UseAuth from '../Auth/UseAuth';
import { auth } from '../Firebase/Firebase.config';

const Navbar = () => { 

const {user,SignOutUser}=UseAuth() 

const handleSignOut=()=>{

  SignOutUser(auth)
  .then(res=>console.log(res.user))
  .catch(error=>console.log(error.message))
}

    return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
   
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
      
      <NavLink to={'/'} className={({isActive})=>(isActive ? 'font-bold text-blue-500':'')}>Service</NavLink>
   
           <NavLink to={'/Coverage'} className={({isActive})=>(isActive ? 'font-bold text-blue-500':'')}>Coverage</NavLink>  

              <NavLink to={'/aboutUS'} className={({isActive})=>(isActive ? 'font-bold text-blue-500':'')}>AboutUs</NavLink> 
     

    </ul> 
  </div>
  <div className="navbar-end"> 
   {
    user? <a className='btn' onClick={handleSignOut}>LogOut</a>:<NavLink to={'/logIn'}>Log In</NavLink>
   }
  </div>
</div>
    );
};

export default Navbar;