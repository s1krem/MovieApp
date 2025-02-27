import React from 'react';
import { View, ScrollView} from 'react-native';
import MovieList from '../components/MovieList';
import globalStyles from '../styles/globalStyles';
import TopBar from '../components/TopBar';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={ globalStyles.scrollContainer}>
      <TopBar title="MOVIE EXPLORER" />
      <MovieList category="popular" title="Popular movies" />
      <MovieList category="now_playing" title="Now playing" />
      <MovieList category="top_rated" title="Top rated" />
    </ScrollView>
  );
}
