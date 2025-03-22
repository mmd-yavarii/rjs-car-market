import React, { useEffect, useState } from 'react';
import CarsList from '../components/CarsList/CarsList';
import Filters from '../components/Filters/Filters';

import carsData from '../../data/carsData.js';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search/Search.jsx';
import Empty from '../components/Empty/Empty.jsx';

function Explore() {
  const [display, setDisplay] = useState(carsData);
  const [queries, setQueries] = useSearchParams();
  const category = queries.get('category');
  const search = queries.get('search');

  useEffect(() => {
    let result = category ? carsData.filter((i) => i.category == category) : carsData;
    result = search ? result.filter((i) => `${i.name} ${i.model}`.toLowerCase().includes(search.toLowerCase())) : result;

    setDisplay(result);
  }, [queries]);

  return (
    <div>
      <Search />
      <Filters carsData={carsData} />
      {!!display.length ? <CarsList carsData={display} /> : <Empty title="No Car !" message="No such car exists." />}
    </div>
  );
}

export default Explore;
