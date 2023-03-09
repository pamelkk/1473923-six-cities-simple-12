import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Room from '../../pages/Room/Room';

type AppProps = {
  countForRent: number;
}

function App({ countForRent }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage countForRent={countForRent} />} />
        <Route path='/offer/:id' element={<Room />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
