import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ratingInPercent } from '../../../const/const';
import { TOffer } from '../../../types/types';

type CardsProps = {
  offer: TOffer;
  difference: string;
  changeCurrentCard?: (card?: TOffer) => void;
}

const Card = ({ offer, difference, changeCurrentCard }: CardsProps): JSX.Element => {
  const { id, isPremium, previewImage, price, title, type, rating, isFavorite } = offer;
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  const onMouseHoverChange = (newCard?: TOffer) => {
    changeCurrentCard?.(newCard);
  };

  const changeCardFavoriteStatus = () => {
    setFavoriteStatus(!favoriteStatus);
  };

  return (
    <article className={`${difference}__card place-card`} onMouseEnter={() => onMouseHoverChange(offer)} onMouseLeave={() => onMouseHoverChange()}>
      {isPremium ?
        <div className='place-card__mark'>
          <span>Premium</span>
        </div> : ''}
      <div className={`${difference}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button  button ${favoriteStatus ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={() => changeCardFavoriteStatus()}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${ratingInPercent(rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <Link to={`/offer/${id}`}>
          <h2 className='place-card__name'>
            {title}
          </h2>
        </Link>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
};

export default Card;
