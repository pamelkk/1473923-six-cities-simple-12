import { useEffect } from 'react';
import { UseAppDispatch, UseAppSelector } from '../../hooks';
import CardsList from '../HomePage/CardsList/CardsList';
import { fetchOffersAction } from '../../store/api-actions';

const Favorites = (): JSX.Element => {
  const offers = UseAppSelector((state) => state.offers);
  const difference = 'favorites';
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  const dispatch = UseAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, []);

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoriteOffers.map((favorite) => (
            <li className="favorites__locations-items" key={favorite.id}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{favorite.city.name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <CardsList offers={favoriteOffers.filter((offer) => offer.city.name === favorite.city.name)} difference={difference} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Favorites;
