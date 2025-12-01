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

          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name:</th>
        <th>Cost:</th>
        <th>Sender Address:</th>
        <th>Action:</th>
      </tr>
    </thead>
    <tbody> 

        {parcels.map((parcel,index)=>( 
                <tr>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.senderName}</td>
        <td>Blue</td>
      </tr>

        ))}
  
  
      {/* row 2 */}
 
   
   
    </tbody>
  </table>
</div>

















        </div>
    );
};

export default MyPercels;