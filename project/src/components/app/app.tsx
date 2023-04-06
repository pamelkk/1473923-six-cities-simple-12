import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from '../../pages/Favorites/Favorites';
import HomePage from '../../pages/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Room from '../../pages/Room/Room';
import ScrollToTop from '../ScrollToTop';
import Preloader from '../Preloader/Preloader';
import { AppRoute } from '../../const/const';
import PrivateRoute from '../privateRoute/privateRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.login} element={<Login />} />
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path={AppRoute.favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.offerId} element={<Room />} />
        <Route path={AppRoute.preloader} element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
