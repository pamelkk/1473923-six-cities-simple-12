import { TOffer } from '../../../types/types';
import Card from '../Card/Card';

type CardsListProps = {
  offers: TOffer[];
  difference: string;
  changeCurrentCard?: (card?: TOffer) => void;
}

const CardsList = ({ offers, difference, changeCurrentCard }: CardsListProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((offer) => <Card key={offer.id} offer={offer} difference={difference} changeCurrentCard={changeCurrentCard} />)}
  </div>
);

export default CardsList;
