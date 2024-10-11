import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const baseURL = "https://image.tmdb.org/t/p/w200";
const defaultImg = "https://via.placeholder.com/200x300?text=No+Image";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.poster_path ? (
                <img
                  src={`${baseURL}${movie.poster_path}`}
                  alt={movie.title}
                  className={s.image}
                />
              ) : (
                <img
                  src={defaultImg}
                  alt={movie.title || movie.name}
                  className={s.image}
                />
              )}
              <h3 className={s.title}>{movie.title}</h3>
              <p className={s.score}>
                User Score: {Math.round(movie.vote_average * 10)}%
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
