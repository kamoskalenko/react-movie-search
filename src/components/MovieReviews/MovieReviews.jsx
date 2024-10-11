import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      setIsLoading(true);
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <h2>No reviews yet. Be the first to share your thoughts!</h2>;
  }

  return (
    <div className={s.container}>
      <ul className={s.reviewList}>
        {isLoading && <Loader />}
        {reviews.map((review) => (
          <li key={review.id} className={s.reviewItem}>
            <h3 className={s.author}>{review.author}</h3>
            <p className={s.date}>
              {new Date(review.created_at).toLocaleDateString()}
            </p>
            <p className={s.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
