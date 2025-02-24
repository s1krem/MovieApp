import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles';
import { RouteProp, useRoute } from '@react-navigation/native';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type MovieDetailsRouteProp = RouteProp<{ params: { movie: any } }, 'params'>;

const MovieDetails = () => {
  const route = useRoute<MovieDetailsRouteProp>();
  const { movie } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }} style={styles.detailsImage} />
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description || "No description available."}</Text>
    </View>
  );
};

export default MovieDetails;
