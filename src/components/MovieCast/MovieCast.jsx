import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./MovieCast.module.css";

const baseURL = "https://image.tmdb.org/t/p/w200";
const defaultImg = "https://via.placeholder.com/200x300?text=No+Image";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      setIsLoading(true);
      const data = await fetchMovieCast(movieId);
      setCast(data);
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  if (!cast || cast.length === 0) {
    return <h2>Currently, there`s no information about the actors</h2>;
  }

  return (
    <div className={s.container}>
      <ul className={s.castList}>
        {isLoading && <Loader />}
        {cast.map((cast) => (
          <li key={cast.id} className={s.castItem}>
            {cast.profile_path ? (
              <img
                src={`${baseURL}${cast.profile_path}`}
                alt={cast.name}
                className={s.castImage}
              />
            ) : (
              <img src={defaultImg} alt={cast.name} className={s.castImage} />
            )}
            <p className={s.castDetails}>
              {cast.name} as {cast.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
