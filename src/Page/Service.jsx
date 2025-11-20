import React from 'react';
import Banar from '../Extra-Component/Banar'; 
import bookingLogo from '../../public/bookingIcon.png'
import Section from '../Extra-Component/Section';
import Swiper from '../Extra-Component/Swiper';
import Details from '../Extra-Component/Details';

const Service = () => {
    return (
        <div className='mx-auto container  bg-gray-100'>
          
         <div className="text-center p-5 rounded-md mt-1">
              <Banar></Banar>
         </div> 
  
  <h1 className='font-medium text-xl p-2'>How is Work</h1> 

  <div className="flex gap-2 p-2 mt-10"> 



<div className="card card-dash bg-base-100 w-96"> 
  <div className="card-body">
    <h2 className="card-title"><img src={bookingLogo} alt="" /></h2> 
    <p className='font-bold'>Booking Pick & Drop</p>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
   
  </div>
</div> 

<div className="card card-dash bg-base-100 w-96"> 
  <div className="card-body">
 <h2 className="card-title"><img src={bookingLogo} alt="" /></h2> 
 <p className='font-bold'>Cash On Delivery</p>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
  
  </div>
</div>  

<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
   <h2 className="card-title"><img src={bookingLogo} alt="" /></h2> 
    <p className='font-bold'>Delivery Hub</p>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
 
  </div>
</div>

<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
 <h2 className="card-title"><img src={bookingLogo} alt="" /></h2> 
 <p className='font-bold'>Booking SME & Corporate</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  
  </div>
</div>

  </div>  


  <Section></Section> 

  <Swiper></Swiper> 
  <Details></Details>



 



        


        </div>
    );
};

export default Service;