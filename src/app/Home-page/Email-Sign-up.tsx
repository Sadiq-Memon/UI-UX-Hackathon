import React from 'react';

const SignUpPage = () => {
  return (
    <div className="h-[300px] flex justify-center items-center min-h-screen bg-[#F9F9F9]">
      <div className="w-[90%] h-[400px] max-w-[1273px] bg-white shadow-lg p-8 rounded-lg">
        <div className="flex flex-col items-center text-center gap-4 pt-6">
          <h1 className="text-[36px] font-normal leading-[50.4px] text-[#2A254B]">
            Join the club and get the benefits
          </h1>
          <h5 className="text-[16px] font-normal leading-6 text-[#2A254B] max-w-[470px]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </h5>
          <div className='w-[472px] h-[56px] top-[254px] left-[400px] pt-12 flex'>
             <div className='w-[354px] h-[56px] bg-[#F9F9F9]'>
               <div className='w-[117px] h-[22px] top-[17px] left-[32px] opacity-[20%] font-normal text-[16px] leading-[21.6px] text-[#2A254B] pt-4 pl-8'>
                   your@email.com
               </div>
             </div>
           <button className='w-[118px] h-[56px] py-4 px-8 gap-[10px] bg-[#2A254B]'>
            <h6 className='w-[54px] h-[24px] font-normal text-[16px] leading-6 text-[white]'>
                Sign up
            </h6>
           </button>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

