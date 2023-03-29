import { offersType } from '../../../types/types';
import Card from '../Card/Card';

type CardsListProps = {
  offers: offersType[];
  difference: string;
  changeCurrentCard: (arg0: offersType | object) => void;
}

const CardsList = ({ offers, difference, changeCurrentCard }: CardsListProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((offer) => <Card key={offer.id} offer={offer} difference={difference} changeCurrentCard={changeCurrentCard} />)}
  </div>
);

export default CardsList;
