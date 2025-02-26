import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

type Genre = {
    id: number;
    name: string;
};

type MovieDetails = {
    vote_average: number;
    genres: Genre[];
    release_date: string;
};

export function useFetchMovieDetails(movieId: string) {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJhMmFjMTNiMDQxYzAyMjM3YjU3MzRlZGM0NzFiNyIsIm5iZiI6MTczOTk5MTY0MC4yMjUsInN1YiI6IjY3YjYyYTU4NjRkZWYwMDUzZjE0NTQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Whb7dWOkbVIgPOyaF8lIF0RHYbWaKPraXSSaMNlzaG8',
            },
        };

        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${movieId}?language=en-US`, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: MovieDetails = await response.json();
                setMovieDetails({
                    vote_average: data.vote_average,
                    genres: data.genres,
                    release_date: data.release_date,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (movieId) {
            fetchMovieDetails();
        }
    }, [movieId]);

    return { movieDetails, loading, error };
}
