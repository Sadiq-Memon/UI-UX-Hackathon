import React from 'react'
import Images from "@/app/Home-page/Images"
import LargeSofa from "@/app/Large.png"
import photo2 from "@/app/Right Image.png"
import photo3 from "@/app/Photo (3).png"


const OtherListing = () => {
  return (
    <div className='w-auto h-[744px] ml-[53px]'>
            <h2 className='w-[330px] h-[45px] top-[64px] left-[80px] font-normal text-[32px] leading-[44.8px] text-[#2A254B] pb-20'>
            Our popular products
      </h2>
      <div className="h-auto flex gap-6 items-center justify-center">
        <Images src={LargeSofa} alt='LargeSofa' Heading='The Poplar suede sofa' price='£980' width={630} />
        <Images src={photo2} alt='Product-Card' Heading='The Dandy chair' price='£250' />
        <Images src={photo3} alt='LargeSofa' Heading='The Dandy chair' price='£250' />
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


export default OtherListing