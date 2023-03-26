type LocationsItemProps = {
  changeTown: (arg0: string) => void;
  city: string;
}

const LocationsItem = ({changeTown, city}:LocationsItemProps): JSX.Element => (
  <li key={city} onClick={() => changeTown(city)} className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>
);

export default LocationsItem;
