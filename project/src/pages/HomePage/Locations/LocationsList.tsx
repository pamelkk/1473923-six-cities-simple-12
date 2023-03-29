import { CITIES } from '../../../mocks/cities';
import LocationsItem from './LocationsItem/LocationsItem';

const LocationsList = (): JSX.Element => (
  <ul className="locations__list tabs__list">
    {CITIES.map((city) => (
      <LocationsItem key={city} city={city} />
    ))}
  </ul>
);

export default LocationsList;
