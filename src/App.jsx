import { Navigate, Route, Routes } from 'react-router-dom';

import ProductProvider from './contexts/ProductProvider';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import UserPanel from './pages/UserPanel.jsx';
import PageNoFound from './pages/404.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Layout from './Layout/Layout.jsx';
import BookmarkPage from './pages/BookmarkPage.jsx';

const isAdmin = true;

function App() {
  return (
    <>
      <ProductProvider>
        <Layout isAdmin={isAdmin}>
          <Routes>
            <Route index element={<ProductsPage />} />
            <Route path="/checkout" element={<CartPage />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/profile" element={isAdmin ? <Navigate to="/profile/admin" /> : <Navigate to="/profile/user" />}>
              <Route path="admin" element={<AdminPanel />} />
              <Route path="user" element={<UserPanel />} />
            </Route>
            <Route path="*" element={<PageNoFound />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </>
  );
}

export default App;
