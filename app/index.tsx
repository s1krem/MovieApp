import React from 'react';
import { View, ScrollView} from 'react-native';
import MovieList from '../components/MovieList';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={ globalStyles.scrollContainer}>
      <View style={{ paddingTop: 40 }}>
        <MovieList category="popular" title="Popular movies" />
        <MovieList category="now_playing" title="Now playing" />
        <MovieList category="top_rated" title="Top rated" />
      </View>
    </ScrollView>
  );
}
