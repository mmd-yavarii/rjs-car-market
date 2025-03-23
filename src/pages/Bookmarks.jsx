import React from 'react';
import { useBookmark } from '../context/BookmarkProvider';

function Bookmarks() {
  const [bookmark, dispatchBookmarks] = useBookmark();

  return (
    <>
      <div>
        {bookmark.map((i) => (
          <h1 key={i.id}>{i.name}</h1>
        ))}
      </div>

      <button onClick={() => dispatchBookmarks({ type: 'CLEAR' })}>clear</button>
    </>
  );
}

export default Bookmarks;
