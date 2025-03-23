import { createContext, useContext, useEffect, useReducer } from 'react';

const BookmarkContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];

    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.payload.id);

    case 'CLEAR':
      return [];

    default:
      throw new Error('Action is not defined');
  }
}

const initialState = JSON.parse(localStorage.getItem('bookmarks')) || [];

function BookmarkProvider({ children }) {
  const [bookmark, dispatchBookmarks] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmark));
  }, [bookmark]);

  return <BookmarkContext.Provider value={{ bookmark, dispatchBookmarks }}>{children}</BookmarkContext.Provider>;
}

function useBookmark() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmark must be used within a BookmarkProvider');
  }
  return [context.bookmark, context.dispatchBookmarks];
}

export default BookmarkProvider;
export { useBookmark };
