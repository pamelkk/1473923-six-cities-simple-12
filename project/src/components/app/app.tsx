import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Room from '../../pages/Room/Room';
import { offersType } from '../../types/types';

type AppProps = {
  offers: offersType[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage offers={offers} />} />
        <Route path='/offer/:id' element={<Room offers={offers}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
