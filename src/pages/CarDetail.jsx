import { Link, useLocation } from 'react-router-dom';

import styles from './style/CarDetail.module.css';
import { useState } from 'react';
import { shorterText } from '../helper/helper';

import { PiSneakerMoveBold } from 'react-icons/pi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { useBookmark } from '../context/BookmarkProvider';

function CarDetail({ isLogin }) {
  const { state: info } = useLocation();
  const { id, image, name, model, year, distance, location, price, category, description } = info;

  const [bookmark, dispatchBookmarks] = useBookmark();
  const isBookmark = bookmark.some((i) => i.id == id);
  const [moreDescripttion, setMoreDescripttion] = useState({ show: true, text: shorterText(description) });

  // show more descripion
  function outMoreHandler() {
    setMoreDescripttion({ show: false, text: description });
  }

  // add to bookmark or remove from bookmark s
  function bookmarkHandler(type) {
    dispatchBookmarks({ type: type, payload: info });
  }

  return (
    <>
      <div className={styles.container}>
        <img src={image} alt={model} />

        <div className={styles.info}>
          <p>
            <span>
              <IoPricetagsOutline />
            </span>
            {price.toLocaleString()} $
          </p>
          <p>
            <span>
              <MdOutlineDateRange />
            </span>
            {year}
          </p>
          <p>
            <span>
              <PiSneakerMoveBold />
            </span>
            {Number(distance).toLocaleString()} km
          </p>
          <p>
            <span>
              <GrLocation />
            </span>
            {location}
          </p>
          <p>
            <span>
              <IoCarSportOutline />
            </span>
            {category}
          </p>
        </div>
      </div>

      <div className={styles.name}>
        <p>
          {name} {model}
        </p>

        {isLogin ? (
          <button onClick={() => bookmarkHandler(isBookmark ? 'REMOVE_ITEM' : 'ADD_ITEM')}>
            {isBookmark ? <IoBookmark fontSize="1.5rem" /> : <IoBookmarkOutline fontSize="1.5rem" />}
          </button>
        ) : (
          <Link to="/login">
            <IoBookmarkOutline fontSize="1.5rem" />
          </Link>
        )}
      </div>

      <div className={styles.moreDescripttion}>
        <p>{moreDescripttion.text}</p>
        {moreDescripttion.show && <button onClick={outMoreHandler}> more... </button>}
      </div>
    </>
  );
}

export default CarDetail;
