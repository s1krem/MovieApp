import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

interface FetchMoviesResult {
  movies: any[];
  loading: boolean;
  error: Error | null;
}

export function useFetchMovies(category: string): FetchMoviesResult {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJhMmFjMTNiMDQxYzAyMjM3YjU3MzRlZGM0NzFiNyIsIm5iZiI6MTczOTk5MTY0MC4yMjUsInN1YiI6IjY3YjYyYTU4NjRkZWYwMDUzZjE0NTQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Whb7dWOkbVIgPOyaF8lIF0RHYbWaKPraXSSaMNlzaG8',
      },
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${category}?language=en-US&page=1`, options);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  return { movies, loading, error };
}
