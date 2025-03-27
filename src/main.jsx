import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import BookmarkProvider from './context/BookmarkProvider.jsx';
import LoginProvider from './context/LoginProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
