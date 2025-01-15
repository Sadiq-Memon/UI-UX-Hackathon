
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 mb-8 w-full mt-2  h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] satoshi hidden md:flex justify-center items-center'>

      <Link
      href="/Home2"
      className='hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1'
      >Plant pots</Link>

     <Link
        href="/Ceramics"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Ceramics
      </Link>
      <Link
        href="/Tables"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Tables
      </Link>
      <Link
        href="/Chairs"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Chairs
      </Link>
      <Link
        href="/Crockery"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Crockery
      </Link>
      <Link
        href="/Tableware"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Tableware
      </Link>

      <Link
        href="/Cutlery"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Cutlery
      </Link>

    </nav>
  )
}

export default Navbar
















// import Link from "next/link";


// {/* className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1" */}

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 mb-8 w-full mt-2  h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] satoshi hidden md:flex justify-center items-center">

//      <Link
       
//      >
           
//      </Link>

//       <Link
//         href="/Ceramics"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Ceramics
//       </Link>
//       <Link
//         href="/Tables"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Tables
//       </Link>
//       <Link
//         href="/Chairs"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Chairs
//       </Link>
//       <Link
//         href="/Crockery"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Crockery
//       </Link>
//       <Link
//         href="/Tableware"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Tableware
//       </Link>

//       <Link
//         href="/Cutlery"
//         className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//       >
//         Cutlery
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;