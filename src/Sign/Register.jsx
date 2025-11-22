import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../Auth/UseAuth';
import axios from 'axios';

const Register = () => { 

 const {register,handleSubmit,formState:{errors}}=useForm() 

 const {registerUser}=UseAuth()

 const hadleRegister=(data)=>{ 

  const ProfileImg=data.photo[0]

registerUser(data.email,data.password) 
.then(result=>{ 

 const formData=new FormData()
 formData.append('image',ProfileImg) 

  const Img_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_host}`
 axios.post(Img_URL,formData) 
 .then(res=>console.log(res.data.data.url))



    console.log(result.user)
}) 

.catch(error=>{
    console.log(error.message)
})
 }

    return (
<div className="flex justify-center items-center min-h-screen bg-base-200">
  <div className="w-full max-w-sm p-8 bg-base-100 rounded-xl shadow-xl">

    <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

    <form onSubmit={handleSubmit(hadleRegister)} className="flex flex-col space-y-4"> 

   {/* Name Field  */} 


   <label className="label">Name</label>
    <input type="text" {...register('name',{required:true})} className="input" placeholder="Name Please" /> 
          {
            errors.name?.type==='required' && <p className='text-red-500'>Name Required</p>
          }
 
         {/* Photo field */} 

       
   <label className="label">Photo</label>
    <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="select photo" /> 
          {
            errors.photo?.type==='required' && <p className='text-red-500'>Photo Required</p>
          }



      {/* Email */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>

        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered w-full"
          placeholder="Enter your email"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>

        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 characters required",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Must include uppercase, lowercase, number & special character",
            },
          })}
          className="input input-bordered w-full"
          placeholder="Enter your password"
        /> 
        {/* {
            errors.password?.type==='required' && <p>password de</p>
        } */}

         {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )} 

        <label className="label">
          <a className="link link-hover text-sm">Forgot password?</a>
        </label>
      </div>

      <button className="btn btn-neutral w-full mt-2">Register</button>
    </form>

  </div>
</div>


    );
};

export default Register;