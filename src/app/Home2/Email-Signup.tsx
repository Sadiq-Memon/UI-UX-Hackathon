import React from 'react'
import Image from 'next/image'
import img from "@/app/Email sign-up.png"

const SignUp = () => {
  return (
    <div className='w-auto h-[400px]'>
        <Image src={img} alt='Email-SignUp-Image' />
    </div>
  )
}

export default SignUp
