import React from 'react';
import Image from 'next/legacy/image';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className=" relative h-96 cursor-pointer mt-8 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="shadow-md rounded-xl"
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="mb-3 text-3xl w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-white bg-gray-600 text-sm rounded-xl py-2 mt-5 m-2 px-4 hover:content-none shadow-md hover:shadow-xl active:scale-90 transition duration-150 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
