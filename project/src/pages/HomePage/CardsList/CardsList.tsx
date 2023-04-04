import { useEffect } from 'react';
import { UseAppDispatch, UseAppSelector } from '../../../hooks';
import { uploadCardsAction } from '../../../store/actions';
import { TOffer } from '../../../types/types';
import Card from '../Card/Card';

type CardsListProps = {
  difference: string;
  changeCurrentCard?: (card?: TOffer) => void;
}

const CardsList = ({ difference, changeCurrentCard }: CardsListProps): JSX.Element => {
  const offers = UseAppSelector((state) => state.offers);
  const town = UseAppSelector((state) => state.city);
  const dispatch = UseAppDispatch();

  useEffect(()=> {
    dispatch(uploadCardsAction(town))
  }, []);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => <Card key={offer.id} offer={offer} difference={difference} changeCurrentCard={changeCurrentCard} />)}
    </div>
  );
};

export default CardsList;
