import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../Auth/UseAuth';

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
        <form className="fieldset"onSubmit={handleSubmit(handleLogin)}>
          <label className="label">Email</label>
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
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    );
};

export default Login;