import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGusets } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MM yy');
  const range = `${formattedStartDate} -${formattedEndDate} `;
git 
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">
            300+ Stays -{range} -for {numberOfGusets} guests
          </p>
          <h1 className="text-3xl mt-2 mb-6 font-semibold">
            Stays in Mars {location}
          </h1>

          <div className="hidden lg:inline-flex justify-between">
            <p className="my-button">Cancellatin Flexiblity</p>
            <p className="my-button">Type Of Place</p>
            <p className="my-button">Price</p>
            <p className="my-button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
