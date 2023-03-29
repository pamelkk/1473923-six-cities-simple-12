import { Link } from 'react-router-dom';
import { UseAppDispatch, UseAppSelector } from '../../../../hooks/index';
import { changeCityAction } from '../../../../store/actions';

type LocationsItemProps = {
  city: string;
}

const LocationsItem = ({ city }: LocationsItemProps): JSX.Element => {
  const town = UseAppSelector((state) => state.city);
  const dispatch = UseAppDispatch();
  const changeTown = (newCity: string) => {
    dispatch(changeCityAction(newCity));
  };

  return (
    <li key={city} className="locations__item">
      <Link onClick={() => changeTown(city)} className={`locations__item-link tabs__item ${town === city ? 'tabs__item--active' : ''}`} to='#'>
        <span>{city}</span>
      </Link>
    </li>
  );
};

export default LocationsItem;
