import { ChangeEvent, FormEvent, useState } from 'react';
import { UseAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { TUserComment } from '../../types/types';
import { useParams } from 'react-router-dom';
import { MAX_LETTERS_REVIEW, MIN_LETTERS_REVIEW, MIN_RATING_REVIEW } from '../../const/const';

const Form = (): JSX.Element => {
  const dispatch = UseAppDispatch();
  const params = useParams();
  const [currentReview, setCurrentReview] = useState({comment: '', rating: 0});

  const commentFieldCheck = currentReview.comment.length < MIN_LETTERS_REVIEW || currentReview.comment.length > MAX_LETTERS_REVIEW || currentReview.rating === MIN_RATING_REVIEW;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(!commentFieldCheck) {
      return;
    }

    const newComment: TUserComment = {
      comment: currentReview.comment,
      id: Number(params.id),
      rating: currentReview.rating,
    };

    onSubmit(newComment);
  };

  const handleTextChange = (newText: string) => {
    setCurrentReview({...currentReview, comment: newText});
  };

  const cleanForm = () => {
    setCurrentReview({...currentReview, comment: '', rating: 0});
  };

  const onSubmit = (commentData: TUserComment) => {
    dispatch(sendReviewAction(commentData));
    cleanForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={() => handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={({target}: ChangeEvent<HTMLInputElement>) => setCurrentReview({...currentReview, [target.name]: target.value})}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={(evt) => handleTextChange(evt.target.value)} className="reviews__textarea form__textarea" minLength={50} maxLength={300} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!!commentFieldCheck}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
