import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/Favorites/Favorites';
import HomePage from '../../pages/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Room from '../../pages/Room/Room';
import ScrollToTop from '../ScrollToTop';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/offer/:id' element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
