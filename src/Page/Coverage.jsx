import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => { 
    const position = [25.7500, 89.2500] 
    const ServicesCenter=useLoaderData()
    console.log(ServicesCenter)
    return (
        <div className='mt-5 container mx-auto '>  
        <h1 className='mt-5 font-bold  text-5xl mb-5 text-center'>We are All in 64 District</h1>
           <div className="w-full h-[900px] border">

       
             <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[900px]'>  

                <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
         
         {
            ServicesCenter.map(center=> 
                <Marker position=
                {[center.latitude ,center.
longitude


]}>

                </Marker>
            )
         }



             </MapContainer> 
                 </div>
            
        </div>
    );
};

export default Coverage;