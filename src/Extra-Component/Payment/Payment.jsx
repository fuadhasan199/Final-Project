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

    return (
        <div>
           <h1>parcels pay :{parcel.parcelName}</h1>
        </div>
    );
};

export default Payment;