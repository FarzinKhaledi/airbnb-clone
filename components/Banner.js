import Image from 'next/legacy/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className=" absolute top-1/2 w-full text-center">
        <p className="color-black text-sm sm:text-lg">
          Where would you like to go
        </p>
        <button className="text-purple-500 bg-white px-8 py-4 rounded-full mt-2 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          Dream distenations
        </button>
      </div>














      
    </div>
  );
}

export default Banner;
