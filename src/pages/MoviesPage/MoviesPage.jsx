import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import FilterBar from "../../components/FilterBar/FilterBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import s from "./MoviesPage.module.css";

import NotifyNoMoviesFound from "../../components/Notify/NotifyNoMoviesFound";
import "react-toastify/dist/ReactToastify.css";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getData = async () => {
      setIsLoading(true);
      const data = await searchMovies(query);
      setMovies(data);
      setIsLoading(false);
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.warn("Don't be shy, enter a movie title to search!");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  return (
    <div className={s.container}>
      <FilterBar handleChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}

      {movies.length > 0 && <MovieList movies={movies} />}
      {movies.length === 0 && !isLoading && query !== "" && (
        <NotifyNoMoviesFound />
      )}

      <ToastContainer />
    </div>
  );
};

export default MoviesPage;
