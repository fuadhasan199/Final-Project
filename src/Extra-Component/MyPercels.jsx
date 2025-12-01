import React from 'react';
import UseAuth from '../Auth/UseAuth';
import useAxios from '../Auth/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

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
        <th>Payment</th>
      </tr>
    </thead>
    <tbody> 

        {parcels.map((parcel,index)=>( 
                <tr>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.senderName}</td>
        <td>
            {parcel.paid ? <span className='font-bold bg-blue-400 p-2'>Paid</span> : 
            
            
             <Link to={`/dashboard/payment/${parcel._id}`}>
              <button className="btn btn-primary btn-sm">pay</button>
             </Link>
            
            
            } 
            {/* <span className='font-bold bg-red-500 p-2'>Unpaid</span> */}
        </td>
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