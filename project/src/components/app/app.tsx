import HomePage from '../../pages/HomePage/HomePage';

type AppProps = {
  countForRent: number;
}

function App({countForRent}: AppProps): JSX.Element {
  return (
    <HomePage countForRent={countForRent} />
  );
}

export default App;
