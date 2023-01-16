import React from 'react';
import Image from 'next/legacy/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div
      className="flex py-7 
    px-2 pr-5 
    cursor-pointer 
    hover:opacity-80 
    hover:shadow-lg 
    transition duration-200
    easy-out
    first:border-t "
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  ">
        <Image
          className="rounded-md "
          src={img}
          layout="fill"
          alt={title}
          objectFit="cover"
        />
      </div>
      <div className="flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className=" border-b pt-2">
          <p className=" pt-2 text-sm text-gray-500 flex-grow">{description}</p>
          <div className="flex justify-between items-end pt-5 ">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {star}
            </p>
            <div className="">
              <p className="font-semibold text-lg pb-2 lg:text-2xl">{price}</p>
              <p className="text-right font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoCard;
