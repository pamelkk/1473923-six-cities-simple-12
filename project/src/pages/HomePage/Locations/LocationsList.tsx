import LocationsItem from './LocationsItem/LocationsItem';


type LocationsListProps = {
  cities: string[];
  changeTown: (arg0: string) => void;
}

const LocationsList = ({ cities, changeTown }: LocationsListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <LocationsItem key={city} city={city} changeTown={changeTown} />
    ))}
  </ul>
);

export default LocationsList;
