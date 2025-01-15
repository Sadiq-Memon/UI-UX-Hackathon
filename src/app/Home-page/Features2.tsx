import React from 'react'
import Image from 'next/image'
import photo from "@/app/Image.png"

const Features2 = () => {
  return (
    <div className='w-auto h-[603px] flex'>
        <div className='w-1/2 h-[603px] bg-[#FFFFFF] pt-16 pl-16'>
           <div className='w-[536px] h-[225px] top-[72px] left-[84px] gap-[25px]'>
            <div className='w-[514px] h-[68px] font-normal text-[24px] leading-[33.6px] text-[#2A254B] mb-6'>
              From a studio in London to a global brand with
              over 400 outlets
            </div>
            <div className='w-[536px] h-[132px] font-normal text-[16px] leading-[21.6px] text-[#505977]'>
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </div>
           </div>
           <button className='w-[150px] h-[56px] top-[493px] left-[84px] py-4 px-8 gap-[10px] bg-[#F9F9F9] mt-52'>
              <div className='w-[86px] h-[24px] font-normal text-[16px] leading-6 text-[#2A254B] whitespace-nowrap'>
                 Get in touch
              </div>
           </button>
        </div>
       <Image src={photo} alt='Feature-Image' className='w-1/2 h-[603px] left-[720px]'/>

    </div>
  )
}

export default Features2
