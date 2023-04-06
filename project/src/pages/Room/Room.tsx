import { useParams } from 'react-router-dom';
import { UseAppDispatch, UseAppSelector } from '../../hooks';
import CardsList from '../HomePage/CardsList/CardsList';
import Map from '../Map/Map';
import Reviews from '../Reviews/Reviews';
import { fetchSpecificOfferAction } from '../../store/api-actions';
import { ratingInPercent } from '../../utils';
import { MAX_IMAGES } from '../../const/const';
import { useEffect } from 'react';

const Room = (): JSX.Element => {
  const params = useParams();
  const dispatch = UseAppDispatch();
  const reviews = UseAppSelector((state) => state.reviews);
  const offers = UseAppSelector((state) => state.offers);

  useEffect(()=> {
    dispatch(fetchSpecificOfferAction(Number(params.id)));
  }, []);
  const detectedRoom = UseAppSelector((state) => state);
  console.log(detectedRoom)
  const difference = 'near-places';

  const otherRooms = offers.filter((offer) => offer.id !== Number(params.id));
  const { isPremium, images, price, title, type, rating, maxAdults, bedrooms, goods, host, description } = detectedRoom;
  const { avatarUrl, isPro, name } = host;

  const filteredImages = images.slice(0, MAX_IMAGES);

  return (
    <div className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {filteredImages.map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio"></img>
              </div>))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div> : ''}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${ratingInPercent(rating)}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro ? <span className="property__user-status">Pro</span> : ''}
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <Reviews reviews={reviews} />
          </div>
        </div>
        <section className="property__map map">
          <Map />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardsList offers={otherRooms} difference={difference} />
        </section>
      </div>

    </div>
  );
};

export default Room;
