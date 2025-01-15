import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImagesProps { // Renamed to avoid potential conflicts
  src: string | StaticImageData;
  alt: string;
  Heading: string;
  price: string;
  width?: number;
}

const Images: React.FC<ImagesProps> = ({ src, alt, Heading, price, width = 305 }) => {
  return (
    <main className="h-[462px] gap-[24px]">
      <div>
        <Image src={src} alt={alt} className="h-[375px]" width={width} />
      </div>
      <h4 className="font-normal text-[20px] leading-[28px] text-[#2A254B] pt-5">
        {Heading}
      </h4>
      <h5 className="font-normal text-[18px] leading-[27px] text-[#2A254B] pt-2">
        {price}
      </h5>
    </main>
  );
};

export default Images;
