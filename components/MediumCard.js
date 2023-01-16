import React from 'react';
import Image from 'next/legacy/image';

function MediumCard({ img, title }) {
  return (
    <div
      className="
        text-center
        cursor-pointer 
        hover:scale-105 
        transform 
        transition 
        duration-300 
        easy-out
      "
    >
      <div className="relative h-80 w-80 ">
        <Image className="rounded-xl" alt={title} src={img} layout="fill" />
      </div>
      <h3 className=" text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
