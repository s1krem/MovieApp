import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet} from 'react-native';
import {useFetchMovies} from './useFetchMovies';
import styles from '../styles/globalStyles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieListProps {
  category: string;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({category, title}) => {
  const {movies, loading, error} = useFetchMovies(category);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading movies</Text>;
  }

  return(
    <View>
      <Text>{title}</Text>
      <FlatList
      data={movies} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.movieContainer}>
          <Image
            source={{uri:`${IMAGE_BASE_URL}${item.poster_path}`}}
            style={styles.poster}
          />
          <Text style={styles.movieTitle}>{item.title}</Text>
        </View>
        
      )}
      horizontal={true}
      />
    </View>
  );
};


export default MovieList;