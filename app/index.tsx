import React from 'react';
import {ScrollView} from 'react-native';
import MovieList from '../components/MovieList';
import globalStyles from '../styles/globalStyles';
import TopBar from '../components/TopBar';
import { useLoadFonts } from '../services/useLoadFonts';



export default function HomeScreen() {

  const fontsLoaded = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ScrollView contentContainerStyle={ globalStyles.scrollContainer}>
      <TopBar title="MOVIE EXPLORER" />
      <MovieList category="popular" title="Popular movies" />
      <MovieList category="now_playing" title="Now playing" />
      <MovieList category="top_rated" title="Top rated" />
    </ScrollView>
  );
}
