import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFetchMovieDetails } from '../services/useFetchMovieDetails';
import styles from '../styles/movieDetailsStyles';

type MovieDetailsProps = {
    movieId: string;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
    const { movieDetails, loading, error } = useFetchMovieDetails(movieId);

    if (loading) return <ActivityIndicator size="large" color="#ffffff" />;
    if (error) return <Text style={styles.errorText}>Error: {error}</Text>;
    if (!movieDetails) return <Text style={styles.noDataText}>No details available</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>PREMIERE:</Text>
            <Text style={styles.value}>{new Date(movieDetails.release_date).toDateString()}</Text>

            <Text style={styles.label}>GENRES:</Text>
            <Text style={styles.value}>
                {movieDetails.genres.map((genre) => genre.name).join(', ')}
            </Text>

            <Text style={styles.label}>RATING:</Text>
            <Text style={styles.value}>⭐ {movieDetails.vote_average.toFixed(1)}</Text>
        </View>
    );
};

export default MovieDetails;
