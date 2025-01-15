import React from 'react'
import Images from "@/app/Home-page/Images"
import photo1 from "@/app/Right Image.png"
import photo2 from "@/app/Photo.png"
import photo3 from "@/app/Photo (1).png"
import photo4 from "@/app/Photo (2).png"

const Listing = () => {
  return (
    <div className='w-auto h-[761px]'>
      <div className='w-[217px] h-[39px] top-[80px] left-[80px] font-normal text-[32px] leading-[39.36px] text-[#2A254B] ml-[53px] pb-20'>
        New ceramics
      </div>
      <div className="h-auto flex gap-6 items-center justify-center ml-[53px]">
          <Images src={photo1} alt="Product-Card" Heading='The Dandy chair' price='£250'/>
          <Images src={photo2} alt="Product-Card" Heading='Rustic Vase Set' price='£155'/>
          <Images src={photo3} alt="Product-Card" Heading='The Silky Vase' price='£125'/>
          <Images src={photo4} alt="Product-Card" Heading='The Lucy Lamp' price='£399'/>
      </div>
      <div className='flex justify-center items-center pt-7'>
      <button className='w-[170px] h-[56px] top-[649px] left-[635px] px-8 py-4 gap-[10px] bg-[#F9F9F9]'>
          <h5 className='w-[106px] h-[24px] font-normal text-[16px] leading-6 text-[#2A254B] whitespace-nowrap'>
              View collection
          </h5>
      </button>
      </div>
    </div>
  )
}



export default Listing
