import Navbar from "@/app/Navbar-Component/Navbar";
import Header from "@/app/Navbar-Component/Header";
import Hero from "@/app/Home-page/Hero-Block";
import Features from "@/app/Home-page/Features";
import Listing from "@/app/Home-page/Listing";
import OtherListing from "./Home-page/OtherListing";
import EmailPage from "@/app/Home-page/Email-Sign-up"
import Features2 from "./Home-page/Features2";
import Footer from "@/app/Home-page/Footer"

export default function Document() {
  return (
       <>
        <Header/>
        <div className=" flex justify-center">
        <hr className="mt-8 w-[95%] border-[#0000001A] border-[1px]"/>
        </div>
        <Navbar/>
        <Hero />
        <Features />
        <Listing />
        <OtherListing />
        <EmailPage />
        <Features2 />
        <Footer />
        </>
  )
};