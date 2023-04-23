import { MAX_REVIEWS } from '../../const/const';
import { UseAppSelector } from '../../hooks';
import Form from '../Form/Form';
import ReviewItem from './ReviewItem/ReviewItem';

const Reviews = (): JSX.Element => {
  const reviews = UseAppSelector((state) => state.reviews);
  const filteredReviews = reviews.slice(0, MAX_REVIEWS);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {filteredReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      <Form />
    </section>
  );
};

export default Reviews;
