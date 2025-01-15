import Image from 'next/image';
import img from "@/app/Right Image.png"


import React from 'react'

const Hero = () => {
  return (
    <div className='h-[704px] flex px-11'>
        <div className='w-[60%] h-[577px] bg-[#2A254B]'>
          <div>
          <h2 className="font-normal text-[32px] leading-[44.8px] text-white whitespace-nowrap pl-[60px] pt-12 font">
        The furniture brand for the
        <br />
        future, with timeless designs
      </h2>
      <button className="w-[170px] h-[56px] ml-[60px] py-[16px] bg-[#F9F9F926] mt-[50px] flex items-center justify-center">
        <p className="font-normal text-[16px] leading-6 text-[#FFFFFF] whitespace-nowrap">
          View collection
        </p>
      </button>
      <div>
      <div className="w-[602px] h-[81px] mt-[195px] pl-[60px]">
      <p className="font-normal text-[18px] leading-[27px] text-white whitespace-nowrap">
        A new era in eco-friendly furniture with Avelon, the French luxury
        retail brand <br />
        with nice fonts, tasteful colors, and a beautiful way to
        display things digitally <br /> 
        using modern web technologies.
      </p>
    </div>
      </div>
          </div>
        </div>
            <div className='h-[584px] left-[760px]'>
                <Image src={img} alt='image'/>
            </div> 
    </div>
  )
}

export default Hero
