import { Link } from 'react-router-dom';

import { IoLocationOutline } from 'react-icons/io5';

import styles from './CarsList.module.css';
import { useState } from 'react';

function CarsList({ carsData }) {
  return (
    <div>
      {carsData.map((i) => (
        <Card info={i} key={i.id} />
      ))}
    </div>
  );
}

export default CarsList;

// car item
function Card({ info }) {
  const { id, image, name, model, year, location, price } = info;

  return (
    <Link to={`/car/${id}`}>
      <div className={styles.car}>
        <img src={image} alt={model} />

        <div className={styles.carInfo}>
          <p className={styles.name}>
            {name} {model}
          </p>

          <p>{price.toLocaleString()} $</p>

          <p className={styles.yearAndLocation}>
            {year} / {location} <IoLocationOutline />
          </p>
        </div>
      </div>
    </Link>
  );
}
