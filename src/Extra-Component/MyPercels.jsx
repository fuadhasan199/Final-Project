import React from 'react';
import UseAuth from '../Auth/UseAuth';
import useAxios from '../Auth/useAxios';
import { useQuery } from '@tanstack/react-query';

const MyPercels = () => { 
    const {user}=UseAuth()
    const axiosSecure=useAxios() 

 
    const {data: parcels = [] }=useQuery({
        queryKey:['myPercels',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels?email=${user?.email}`) 
            return res.data
        }
    })

    return (
        <div>
            <h1>This is my percel page :{parcels.length}</h1>
        </div>
    );
};

export default MyPercels;