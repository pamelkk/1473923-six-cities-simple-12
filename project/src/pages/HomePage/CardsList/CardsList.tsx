import { offersType } from '../../../types/types';
import Card from '../Card/Card';

type CardsListProps = {
  offers: offersType[];
}

const CardsList = ({offers}: CardsListProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
  </div>
);

export default CardsList;
