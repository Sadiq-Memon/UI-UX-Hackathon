import React from 'react'
import Header from "@/app/Navbar-Component/Header";
import Navbar from "@/app/Navbar-Component/Navbar";
import HeroBlock from "@/app/Hero Blocks.png"
import Image from 'next/image';
import Features from '@/app/Home-page/Features';
import Listing from "@/app/Home-page/Listing";
import Feat from "@/app/Home2/Feat"
import SignUp from './Email-Signup';
import Footer from '../Home-page/Footer';


const page = () => {
  return (
    <div>
      <Header />
      <div className=" flex justify-center">
        <hr className="mt-8 w-[95%] border-[#0000001A] border-[1px]"/>
        </div>
      <Navbar />
       <Image src={HeroBlock} alt='Hero-Block' className='w-auto h-[704px]'/>
       <br />
       <br />
       <br />
       <Features />
       <Listing />
       <Feat />
       <SignUp />
       <Footer />
    </div>
  )
}

export default page;
