import React from "react";
import { View, ScrollView } from "react-native";
import MovieList from "../components/MovieList";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ paddingTop: 40 }}>
        <MovieList category="popular" title="Popular movies" />
        <MovieList category="now_playing" title="Now playing" />
        <MovieList category="top_rated" title="Top rated" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
