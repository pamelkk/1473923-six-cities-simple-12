import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseAppSelector } from '../../hooks';
import { TOffer } from '../../types/types';
import Map from '../Map/Map';
import Sorting from '../Sorting/Sorting';
import CardsList from './CardsList/CardsList';
import LocationsList from './Locations/LocationsList';
import {APIRoute, AuthorizationStatus} from '../../const/const';
import Preloader from '../../components/Preloader/Preloader';

const HomePage = (): JSX.Element => {
  const offers = UseAppSelector((state) => state.offers);
  const favoriteOffers = UseAppSelector((state) => state.favoriteOffers);
  const town = UseAppSelector((state) => state.city);
  const difference = 'cities';
  const [currentCard, setCurrentCard] = useState<TOffer | undefined>();
  const authorizationStatus = UseAppSelector((state) => state.authorizationStatus);
  const isLoading = UseAppSelector((state) => state.isLoading);

  const changeCurrentCard = (newCard?: TOffer) => {
    setCurrentCard?.(newCard);
  };

  if(isLoading) {
    return <Preloader />;
  }

  return (
    <div className="page page--gray page--main">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {authorizationStatus === AuthorizationStatus.Auth ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <Link to='/favorites'>
                        <span className="header__favorite-count">{favoriteOffers.length}</span>
                      </Link>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={APIRoute.logout}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav> :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={APIRoute.login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>}
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          {offers.length !== 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {town}</b>
                <Sorting />
                <CardsList offers={offers} difference={difference} changeCurrentCard={changeCurrentCard} />
              </section>
              <div className="cities__right-section">
                <Map currentCard={currentCard} />
              </div>
            </div> :
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
