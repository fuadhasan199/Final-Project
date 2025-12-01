import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../Auth/useAxios';

const Send_Percel = () => { 
   const { 
    register, 
     handleSubmit,
     watch,
    //  formState: 
    //  { errors }
     }=useForm() 

     const axiosSecure=useAxios()

   const serviceCenter=useLoaderData() 

   const regionDuplicate=serviceCenter.map(c=>c.region)
   const regiion=[...new Set(regionDuplicate)]
   
   const senderRegion=watch('senderRegion') 

   const receiverRegion=watch('receiverRegion')
   
   const DistrictByRegion=region=>{
     
    const regionDistrict=serviceCenter.filter(c=>c.region===region)

    const district=regionDistrict.map(d=>d.district) 
    return district

   }
  

   const handleSendparcel=data=>{ 

    const sameDistrict=data.senderdistrict ===data.receiverdistrict 

    const isDocument=data.parcelType ==='document' 

    const parcelWeight=parseFloat(data.parcelWeight) 

    let cost=0 ;
    if(isDocument){
       cost=sameDistrict ?60:80
    } 
    else{
       if(parcelWeight <3){
         cost=sameDistrict ?110:150
       } 
       else{
         const minCharge=sameDistrict?110:150 
         const extraWeight=parcelWeight-3
         const extraCharge= sameDistrict?extraWeight*40 :extraWeight * 40 + 40 
         cost=minCharge+extraCharge

       }
    }
       console.log(cost) 
       data.cost=cost ;

     
Swal.fire({
  title: "Agree With Send parcel",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Send Parcel"
}).then((result) => {
  if (result.isConfirmed) { 

   axiosSecure.post('/parcels',data)
   .then(res=>{
    console.log(res.data)
   })

    // Swal.fire({
    //   title: "Cancelled",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});

    

   }

 return (
<div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
<div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl space-y-6">
<h1 className="text-2xl font-bold text-center">Send Parcel</h1>


{/* Parcel Type */} 

<form onSubmit={handleSubmit(handleSendparcel)}> 


<div className="space-y-2">
<label className="font-semibold">Parcel Type</label>
<div className="flex items-center gap-6">
<label className="flex items-center gap-2">
<input
type="radio" {...register('parcelType')}
name="parcelType"
value="document"defaultChecked
/>
Document
</label>


<label className="flex items-center gap-2">
<input
type="radio" {...register('parcelType')}
name="parcelType"
value="non-document"
/>
Non‑Document
</label>
</div> 
</div>
 
 {/* parcel info /send -weight */} 



 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


  <fieldset className="fieldset">
          <label className="label">parcel Name :</label>
          <input type="text" {...register('parcelName')} className="input" placeholder="Parcel Name" /> 
        </fieldset> 


  <fieldset className="fieldset">
          <label className="label">Parcel Weight :</label>
          <input type="text" {...register('parcelWeight')} className="input" placeholder="Parcel Parcel Weight" /> 
        </fieldset> 


         </div> 


         {/* Sender Details */} 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

     

         
          
      <fieldset className="fieldset"> 
        <h3 className="text-2xl font-semibold">Sender Details</h3> 
          <label className="label">Sender Name :</label>
          <input type="text" {...register('senderName')} className="input" placeholder="Your Name Please" /> 

           

                     <label className="label">Phone Number:</label>
          <input type="number" {...register('senderPhoneNumber')} className="input" placeholder="+8801******** " />
         

    {/* PICK A REGION */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Region</legend>
  <select {...register('senderRegion')}  className="select">
    <option disabled={true}>Pick a Region</option>
    

    {regiion.map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>
 
</fieldset>  
                {/* pick a Distrcit */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender District</legend>
  <select {...register('senderdistrict')}  className="select">
    <option disabled={true}>Pick a Disctrict  </option>
    

    {DistrictByRegion(senderRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>
 
</fieldset>


        



        </fieldset>  

{/* RECEIVER DETAILS */}
      <fieldset className="fieldset"> 
               <h3 className="text-2xl font-semibold">Receiver Details</h3> 

          <label className="label">Receiver Name :</label>
          <input type="text" {...register('receiverName')} className="input" placeholder="Receiver Name Please" /> 

           

                     <label className="label">Phone Number:</label>
          <input type="number" {...register('receiverPhoneNumber')} className="input" placeholder="+8801******** " />
         


              {/* <label className="label mt-2">Receiver District:</label>
          <input type="text" {...register('receiverDistrict')} className="input" placeholder="District Name..." /> 
 */}
               

 
    {/* PICK A REGION */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Region</legend>
  <select {...register('receiverRegion')}  className="select">
    <option disabled={true}>Pick a Region</option>
    

    {regiion.map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>
 
</fieldset>  
                {/* pick a Distrcit */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver District</legend>
  <select {...register('receiverdistrict')} className="select">
    <option disabled={true}>Pick a Disctrict  </option>
    

    {DistrictByRegion(receiverRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>







        </fieldset> 
        </fieldset>





            


</div> 
 







<button className="w-full bg-blue-600 text-white py-2 mt-5 rounded-xl font-semibold hover:bg-blue-700">Submit</button> 
</form> 
</div>
</div>

); 
}

export default Send_Percel;