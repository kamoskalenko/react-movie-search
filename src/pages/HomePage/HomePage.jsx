import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllMovies = async () => {
      setIsLoading(true);
      const data = await fetchMovies();
      setMovies(data);
      setIsLoading(false);
    };
    getAllMovies();
  }, []);

  return (
    <div className={s.container}>
      {isLoading && <Loader />}
      <h2 className={s.title}>Trending today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
