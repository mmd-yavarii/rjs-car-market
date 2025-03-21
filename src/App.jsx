import { Navigate, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import CarDetail from './pages/CarDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PageNotFound from './pages/404';
import AdminPanel from './pages/AdminPanel';
import Layout from './Layout/Layout';

function App() {
  const islogin = false;

  return (
    <Layout>
      <Routes>
        <Route index element={<Explore />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/login" element={!islogin ? <Login /> : <Navigate to="/" replace={true} />} />

        <Route path="/profile" element={islogin ? <Profile /> : <Navigate to="/login" replace={true} />}>
          <Route path="admin" element={true ? <AdminPanel /> : <Navigate to="/profile" replace={true} />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
