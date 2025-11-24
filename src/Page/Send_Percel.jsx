import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const Send_Percel = () => { 
   const { register,  handleSubmit,watch,formState: { errors },}=useForm() 

   const serviceCenter=useLoaderData() 

   const regionDuplicate=serviceCenter.map(c=>c.region)
   const regiion=[...new Set(regionDuplicate)]
   
   const senderRegion=watch('senderRegion')
   
   const DistrictByRegion=region=>{
     
    const regionDistrict=serviceCenter.filter(c=>c.region===region)

    const district=regionDistrict.map(d=>d.district) 
    return district

   }
  

   const handleSendparcel=data=>{

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
type="radio"
name="parcelType"
value="non-document"
/>
Non‑Document
</label>
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

              <label className="label">Sender Address:</label>
          <input type="text" {...register('senderAddress')} className="input" placeholder="Your Address Please" /> 


                     <label className="label">Phone Number:</label>
          <input type="number" {...register('senderPhoneNumber')} className="input" placeholder="+8801******** " />
         

    {/* PICK A REGION */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Region</legend>
  <select {...register('senderRegion')} defaultValue="Pick a browser" className="select">
    <option disabled={true}>Pick a Region</option>
    

    {regiion.map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>
 
</fieldset>  
                {/* pick a Distrcit */}
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender District</legend>
  <select {...register('senderdistrict')} defaultValue="Pick a browser" className="select">
    <option disabled={true}>Pick a Disctrict  </option>
    

    {DistrictByRegion(senderRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)}
   
   
  </select>
 
</fieldset>


        



        </fieldset>  

          
      <fieldset className="fieldset"> 
               <h3 className="text-2xl font-semibold">Receiver Details</h3> 

          <label className="label">Receiver Name :</label>
          <input type="text" {...register('receiverName')} className="input" placeholder="Receiver Name Please" /> 

              <label className="label">Receiver Address:</label>
          <input type="text" {...register('receiverAddress')} className="input" placeholder="Receiver Address Please" /> 


                     <label className="label">Phone Number:</label>
          <input type="number" {...register('receiverPhoneNumber')} className="input" placeholder="+8801******** " />
         


              <label className="label mt-2">Receiver District:</label>
          <input type="text" {...register('receiverDistrict')} className="input" placeholder="District Name..." /> 



        </fieldset> 





             </div>


</div>







<button className="w-full bg-blue-600 text-white py-2 mt-5 rounded-xl font-semibold hover:bg-blue-700">Submit</button> 
</form>
</div>
</div>
); 
}

export default Send_Percel;