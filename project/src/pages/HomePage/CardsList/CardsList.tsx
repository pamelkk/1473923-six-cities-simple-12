import { offersType } from '../../../types/types';
import Card from '../Card/Card';

type CardsListProps = {
  offers: offersType[];
  difference: string;
}

const CardsList = ({ offers, difference }: CardsListProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((offer) => <Card key={offer.id} offer={offer} difference={difference} />)}
  </div>
);

export default CardsList;
