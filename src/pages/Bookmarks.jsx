import React from 'react';
import { useBookmark } from '../context/BookmarkProvider';
import Empty from '../components/Empty/Empty';

function Bookmarks() {
  const [bookmark, dispatchBookmarks] = useBookmark();

  if (bookmark.length) {
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
  } else {
    return <Empty title="No Bookmark" message="It seems you haven't bookmarked any cars yet." />;
  }
}

export default Bookmarks;
