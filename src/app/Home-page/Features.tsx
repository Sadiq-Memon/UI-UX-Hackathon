import React from 'react'
import Image from 'next/image'
import Vector from "@/app/Delivery.png"
import Vector2 from "@/app/Check.png"
import Vector3 from "@/app/Vector (2).png"
import Vector4 from "@/app/Vector (3).png"

const Features = () => {
  return (
    <div className='w-auto h-[355px]'>
    <div className="flex items-center justify-center mb-7">
    <div className="w-[366px] h-[34px] flex items-center justify-center">
      <h3 className="font-normal text-[24px] leading-[33.6px] text-[#2A254B] text-center">
        What makes our brand different
      </h3>
    </div>
  </div>
  <div className='flex justify-between items-center pt-4 px-3'>
    <div className='w-[270px] h-[124px] top-[145px] left-[86px] gap-[16px] pl-11'>
  <Image src={Vector} alt='Delivery-Image' className='w-[21px] h-[21px] top-[4.5px] left-[1.5px]'/>
  <h4 className='w-[199px] h-[28px] font-normal text-[20px] leading-7 text-[#2A254B] pt-6'>
      Next day as standard
   </h4>
   <p className='w-[270px] h-[48px] pt-8'>
       Order before 3pm and get your order
       the next day as standard
   </p>
   </div>
   <div className='w-[266px] h-[124px] top-[145px] left-[415px] gap-[16px]'>
   <Image src={Vector2} alt='CheckMark-Outline' className='w-[21px] h-[21px] top-[1.5px] left-[1.5px]'/>
   <h4 className='w-[205px] h-[28px] font-normal text-[20px] leading-7 text-[#2A254B] pt-6'>
        Made by true artisans
   </h4>
   <p className='w-[266px] h-[48px] font-normal text-[16px] leading-6 text-[#2A254B] pt-8'>
       Handmade crafted goods made with
       real passion and craftmanship
   </p>
   </div>
   <div className='w-[235px] h-[124px] top-[145px] left-[739px] gap-[16px]'>
      <Image src={Vector3} alt='Purchase-Image' className='w-[21px] h-[15px] top-[4.5px] left-[1.5px] text-[#2A254B]'/>
      <h4 className='w-[196px] h-[28px] font-normal text-[20px] leading-7 text-[#2A254B] pt-6'>
           Unbeatable prices
      </h4>
      <p className='w-[235px] h-[48px] pt-8 font-normal text-[16px] leading-6'>
        For our materials and quality you won’t find better prices anywhere
      </p>
   </div> 
   <div className='w-[265px] h-[124px] top-[145px] left-[1065px] gap-[13px]'>
      <Image src={Vector4} alt='Sprout-Image' className='w-[16.5px] h-[21.42px] top-[1.5px] left-[4.5px] text-[#2A254B]'/>
      <h4 className='w-[196px] h-[28px] font-normal text-[20px] leading-7 text-[#2A254B] pt-6'>
          Recycled packaging
      </h4>
      <p className='w-[265px] h-[48px] pt-8 font-normal text-[16px] leading-6 text-[#2A254B]'>
         We use 100% recycled packaging to ensure our footprint is manageable
      </p>
   </div>
   </div>
  </div>
  )
}

export default Features

