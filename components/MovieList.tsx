import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import {useFetchMovies} from '../services/useFetchMovies';
import styles from '../styles/globalStyles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieListProps {
  category: string;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({category, title}) => {
  const {movies, loading, error} = useFetchMovies(category);
  const navigation = useRouter();

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
        <TouchableOpacity onPress={() => navigation.push({ pathname: `/[id]`, params: { id: item.id, ...item } })}>
          <View>
            <Image source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }} style={{ width: 100, height: 150 }} />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      />
    </View>
  );
};


export default MovieList;