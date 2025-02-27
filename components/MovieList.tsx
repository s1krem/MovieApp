import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import {useFetchMovies} from '../services/useFetchMovies';
import movieListStyles from '../styles/movieListStyles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieListProps {
  category: string;
  title: string;
  excludeMovieId?: string;
}

const MovieList: React.FC<MovieListProps> = ({category, title, excludeMovieId}) => {
  const {movies, loading, error} = useFetchMovies(category);
  const navigation = useRouter();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={movieListStyles.errorText}>Error loading movies</Text>;
  }

  const filteredMovies = excludeMovieId
    ? movies.filter((movie) => movie.id.toString() !== excludeMovieId)
    : movies;


  return(
    <View style = {movieListStyles.container}>
      <Text style = {movieListStyles.categoryTitle}>{title}</Text>
      <FlatList
      data={filteredMovies} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity 
        style = {movieListStyles.movieCard}
        onPress={() => navigation.push({ pathname: `/MoviePage`, params: { id: item.id, ...item, category } })}>
          
          <View style={movieListStyles.movieContainer}>
              <Image source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }} style={movieListStyles.moviePoster} />
              <Text style={movieListStyles.movieTitle}>{item.title}</Text>
            </View>
          
        </TouchableOpacity>
      )}
      horizontal
      />
    </View>
  );
};


export default MovieList;