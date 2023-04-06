import { TReview } from '../../types/types';
import Form from '../Form/Form';
import ReviewItem from './ReviewItem/ReviewItem';

type ReviewsProps = {
  reviews: TReview[];
}

const Reviews = ({reviews}: ReviewsProps): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
    <Form />
  </section>
);

export default Reviews;
