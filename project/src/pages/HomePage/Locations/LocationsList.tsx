import { UseAppSelector } from '../../../hooks/index';
import LocationsItem from './LocationsItem/LocationsItem';

const LocationsList = (): JSX.Element => {
  const cities = UseAppSelector((state) => state.cities);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsItem key={city} city={city} />
      ))}
    </ul>
  );
};

export default LocationsList;
