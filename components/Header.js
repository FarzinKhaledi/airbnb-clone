import Image from 'next/legacy/image';
import {
  UserCircleIcon,
  Bars4Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGusets, setNnumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
    setNnumberOfGuests(1);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGusets,
      },
    });
  };
  const selectionRenge = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="nbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className=" relative flex items-center md:border-2  rounded-full py-2  md:shadow-sm mr-0">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow mr-0 pl-5 bg-transparent outline-none text-sm text-gray-600  placeholder-gray-400"
          type="text "
          placeholder="Search here"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-9 bg-red-400 mr-0 text-white rounded-full p-2 cursor-pointer  md:mx-2 absolute right-0" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-start space-x-2 border-2 p-2  rounded-full cursor-pointer">
          <Bars4Icon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRenge]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 shadow-sm">
            <h2 className="text-2xl flex-grow  font-semibold">
              Number Of Guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              onChange={(e) => setNnumberOfGuests(e.target.value)}
              value={numberOfGusets}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 "
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
