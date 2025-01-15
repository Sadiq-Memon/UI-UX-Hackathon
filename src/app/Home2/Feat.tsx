import React from 'react'
import Image from 'next/image'
import img from "@/app/Image Block.png"

const Feat = () => {
  return (
    <div className='w-auto h-[598px] px-12 pb-[60px] gap-[16px] bg-[#FFFFFF] flex'>
      <div className='w-[634px] h-[478px] bg-[#2A254B]'>
        <div className='w-[495px] h-[99px] top-[64px] left-[64px] gap-[12px]'>
            <p className='w-[383px] h-[39px] font-normal text-[32px] leading-[39.36px] text-white pt-16 ml-14'>
                   It started with a small idea                
            </p>
            <p className='w-[495px] h-[48px] font-normal text-[18px] leading-[24.3px] text-white pt-12 ml-14'>
               A global brand with local beginnings, our story begain in a small studio in South London in early 2014
            </p> 
            <button className="w-[170px] h-[56px] bg-[#F9F9F926] flex items-center justify-center mt-64 ml-14">
        <p className="font-normal text-[16px] leading-6 text-[#FFFFFF] whitespace-nowrap">
          View collection
        </p>
      </button>
        </div>
      </div>
      <Image src={img} alt='Image' className='w-[630px] h-[478px]' />
    </div>
  )
}

export default Feat
