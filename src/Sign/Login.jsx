import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../Auth/UseAuth';
import { Link, Navigate } from 'react-router';

const Login = () => { 

 const{register,handleSubmit,formState: { errors }}=useForm() 
 const{  SignInUser}=UseAuth()

 const handleLogin=(data)=>{

   SignInUser(data.email,data.password) 
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error.message))
 }


    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5 mx-auto ">
      <div className="card-body"> 
        <p>Log In</p>
        <form className="fieldset"onSubmit={handleSubmit(handleLogin)}>
         
        
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email Required</p>
          }    <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" /> 
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email Required</p>
          }
          <label className="label">Password</label>
          <input type="password"{...register('password',{required:true,minLength:6})} className="input" placeholder="Password" /> 
          
           {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password Reguired and must 6 character</p>
           }

          <div><a className="link link-hover">Forgot password?</a></div> 
          <p className='text-black mt-2'>Don't have Account <Link to={'/register'} className='text-red-500'>Register</Link> </p>
          <Link to={'/login'} className='btn  text-gray-700'>Log In</Link>
        </form>
      </div>
    </div>
    );
};

export default Login;