import { Suspense, useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import { baseURL, defaultImg } from "../../config/constants";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const backLink = location.state?.from || "/";

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetchMovieById(movieId);
      setMovie(data);
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <Loader />;
  }
  return (
    <div className={s.container}>
      <Link to={backLink} state={{ from: location }} className={s.backLink}>
        Go back
      </Link>
      {isLoading && <Loader />}

      {movie.poster_path ? (
        <img
          src={`${baseURL}${movie.poster_path}`}
          alt={movie.title}
          className={s.image}
        />
      ) : (
        <img src={defaultImg} alt={movie.title} className={s.image} />
      )}

      <h2 className={s.title}>{movie.title}</h2>

      {movie.vote_average ? (
        <p className={s.score}>
          User Score: {Math.round(movie.vote_average * 10)}%
        </p>
      ) : (
        <p>No user score yet</p>
      )}

      <h3 className={s.sectionTitle}>Overview</h3>
      {movie.overview ? (
        <p className={s.overview}>{movie.overview}</p>
      ) : (
        <p>No overview for this movie</p>
      )}

      <h3 className={s.sectionTitle}>Genres</h3>
      {movie.genres.length > 0 ? (
        <ul className={s.genres}>
          {movie.genres.map((genre) => (
            <li key={genre.id} className={s.genreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No information about genres</p>
      )}

      <div className={s.links}>
        <NavLink to="credits" state={{ from: backLink }} className={s.navLink}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from: backLink }} className={s.navLink}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
