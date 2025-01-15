import React from "react";
import Image from "next/image";
import Linkedin from "@/app/Vector (1).png"
import Facebook from "@/app/Facebook.png";
import Instagram from "@/app/Instagram.png"
import Skype from '@/app/Skype.png'
import Twitter from "@/app/Twitter.png"
import Pinterest from "@/app/Pinterest.png"

const Footer = () => {
  return (
    <div className="bg-[#2A254B]">
      <div className="h-auto flex flex-wrap p-8 px-5">
        <div className="w-[200px] pl-10 pt-10">
          <h5 className="text-[16px] font-normal text-white mb-4">Menu</h5>
          <ul className="text-[16px] font-normal text-white space-y-4">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        <div className="w-[200px] pl-16 pt-10">
          <h5 className="text-[16px] font-normal text-white mb-4">Categories</h5>
          <ul className="text-[16px] font-normal text-white space-y-4">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>
        <div className="w-[200px] pl-16 pt-10">
          <h5 className="text-[16px] font-normal text-white mb-4">Our company</h5>
          <ul className="text-[16px] font-normal text-white space-y-4">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>
        <div className="w-[200px] pl-16 pt-10">
          <h5 className="text-[16px] font-normal text-white mb-4 whitespace-nowrap">
            Join our mailing list
          </h5>
          <div className="w-[627px] h-[56px] flex">
            <div className="w-[509px] h-[56px] bg-[#FFFFFF26] flex items-center pl-4">
              <span className="text-white text-[16px]">your@email.com</span>
            </div>
            <button className="w-[118px] h-[56px] bg-white text-[#2A254B] text-[16px] font-normal">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pl-7 py-2">
        <hr className="w-[95%] border-t border-[#4E4D93]" />
      </div>
      <div className="flex justify-between items-center w-full px-14 py-3 text-white">
  {/* Left Content */}
  <div className="font-normal text-[16px] leading-[18.9px] whitespace-nowrap">
    Copyright 2022 Avion LTD
  </div>

  {/* Right Images */}
  <div className="flex gap-4">
    <Image src={Linkedin} alt="Logo-Linkedin" className="w-[18px] h-[17.92px]"/>
    <Image src={Facebook} alt="Logo-Facebook" className="w-[18px] h-[18px]"/>
    <Image src={Instagram} alt="Logo-Instagram" className="w-[18px] h-[18px]"/>
    <Image src={Skype} alt="Logo-Skype" className="w-[19.37px] h-[19.42px]"/>
    <Image src={Twitter} alt="Logo-Twitter" className="w-[16.5px] h-[13.41px]"/>
    <Image src={Pinterest} alt="Logo-Pinterest" className="w-[20.93px] h-[21px]"/>
  </div>
</div>
</div>
  );
};

export default Footer;

