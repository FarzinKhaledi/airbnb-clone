import Image from 'next/legacy/image';
import {
  UserCircleIcon,
  Bars4Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="nbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=" relative flex items-center md:border-2  rounded-full py-2  md:shadow-sm mr-0">
        <input
          className="flex-grow mr-0 pl-5 bg-transparent outline-none text-sm text-gray-600  placeholder-gray-400"
          type="text "
          placeholder="Search here"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-9 bg-red-400 mr-0 text-white rounded-full p-2 cursor-pointer  md:mx-2 absolute right-0" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-start space-x-2 border-2 p-2  rounded-full cursor-pointer">
          <Bars4Icon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
