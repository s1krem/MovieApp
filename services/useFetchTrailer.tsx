import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie';

export function useFetchTrailer(movieId: string) {
    const [trailer, setTrailer] = useState<string | null>(null);
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
    
        const fetchTrailer = async () => {
        try {
            const response = await fetch(`${BASE_URL}/${movieId}/videos?language=en-US`, options);
            const data = await response.json();
            if(data.results.length > 0) {
                const trailers = data.results.filter((video: any) => video.type === 'Trailer');
                const bestTrailer = trailers.find((video: any) => video.size === 1080) || trailers[0];
                if(bestTrailer){
                    setTrailer(`https://www.youtube.com/watch?v=${bestTrailer.key}`);
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
        };
    
       if(movieId) {
            fetchTrailer();
       }
    }, [movieId]);
    
    return { trailer, loading, error };
}