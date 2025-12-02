import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../Auth/useAxios';

const PaymentSucces = () => { 
    const[searchParams,]=useSearchParams()  
    const axiosSecure=useAxios()
    const sessionId=searchParams.get('session_id') 
    console.log(sessionId) 

  useEffect(()=>{
   if(sessionId){
       axiosSecure.patch(`/payment-success?session_id=${sessionId}`) 
       .then(res=>{
        console.log(res.data)
       })
   }


  },[sessionId,axiosSecure])


    return (
        <div>
            <h1 className='mt-5 text-center text-5xl'>Your payment Succesfull </h1>
        </div> 
    );
};

export default PaymentSucces;