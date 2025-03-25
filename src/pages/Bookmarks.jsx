import React from 'react';
import { useBookmark } from '../context/BookmarkProvider';
import Empty from '../components/Empty/Empty';
import CarsList from '../components/CarsList/CarsList';

function Bookmarks() {
  const [bookmark, dispatchBookmarks] = useBookmark();

  if (bookmark.length) {
    return (
      <>
        <CarsList carsData={bookmark} />

        <button style={{ backgroundColor: 'transparent', color: 'red', padding: '1em' }} onClick={() => dispatchBookmarks({ type: 'CLEAR' })}>
          clear
        </button>
      </>
    );
  } else {
    return <Empty title="No Bookmark" message="It seems you haven't bookmarked any cars yet." />;
  }
}

export default Bookmarks;
