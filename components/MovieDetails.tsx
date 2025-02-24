import React from 'react';
import { View, Text} from 'react-native';
import styles from '../styles/globalStyles';
import { RouteProp } from '@react-navigation/native';

type MovieDetailsRouteProp = RouteProp<{ params: { movie: { title: string; description: string; } } }, 'params'>;

const MovieDetails = ({ route }: { route: MovieDetailsRouteProp }) => {
    const {movie} = route.params;
    return (
        <View>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.description}>{movie.description}</Text>
        </View>    
    );
};

export default MovieDetails;