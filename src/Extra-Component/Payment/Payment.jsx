import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Auth/useAxios';
import { useQuery } from '@tanstack/react-query';

const Payment = () => { 

 const {parcelId}=useParams() 
 const axiosSecure=useAxios() 


 const {isLoading,data:parcel}=useQuery({
    queryKey:['parcel',parcelId],
    queryFn:async()=>{
        const res=await axiosSecure.get(`/parcels/${parcelId}`) 
        return res.data
    }
 }) 
 if (isLoading) {
        return <div className="flex justify-center mt-10">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="ml-2">Loading Parcel Details...</p>
        </div>;
    } 


    const handlePayment=async()=>{
        const paymentInfo={
            cost:parcel.cost,
            parcelName:parcel.parcelName,
            parcelId:parcel._id ,
            senderEmail:parcel.senderEmail
        } 
        const res=await axiosSecure.post('/create-checkout-session',paymentInfo) 
        console.log(res.data) 
        window.location.href=res.data.url
    } 


    return ( 
        <div>
            <h1>parcels pay $ {parcel.cost}: {parcel.parcelName}</h1>

           <button onClick={handlePayment} className="btn btn-primary bg-green-500 p-2">Pay</button>
        </div> 
        
    );
};

export default Payment;