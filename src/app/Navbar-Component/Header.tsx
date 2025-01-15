import React from 'react'
import Image from 'next/image';
import icon from '@/app/Search (1).png';
import Shopping from "@/app/Shopping--cart.png"
import Avatar from "@/app/User--avatar.png"

const Header = () => {
  return (
    <div className='flex justify-between'>
      {/* search icon */}
      <div className='w-[16px] h-[16px] top-[26px] left-[28px] bg-white '>
        <Image src={icon} alt='search icon' className='w-[13.52] h-[13.52] mx-7 my-7 border-[#2A254B] mt-5'/>
      </div>
      <h2 className='justify-center text-center w-[65px] h-[30px] top-[20px] left-[687px] text-[24px] leading-[29.52px] text-[#22202E] font items-center pt-3'>
      Avion
      </h2>
      <div className='flex justify-between gap-2 mx-5 pt-4'>
      <div className='w-[16px] h-[16px] top-[26px] left-[1364px]'>
        <Image src={Shopping} alt='Shopping--Cart' className='w-[14.51px] h-[14px] top-[1px] border-[#2A254B]'/>
      </div>
      <div className='w-[16px] h-[16px] top-[26px] left-[1396px]'>
        <Image src={Avatar} alt='User-Avatar' className='w-[14px] h-[14px] top-[1px] left-[1px]'/>
      </div>
      </div>
    </div>
  )
}

export default Header
