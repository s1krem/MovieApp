import { View, ScrollView, Text} from 'react-native';
import MovieList from '..//services/MovieList';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
      <View style={{paddingTop: 40}}>
        <MovieList category="popular" title="Popular movies"/>
        <MovieList category="now_playing" title="Now playing"/>
        <MovieList category="top_rated" title="Top rated"/>
      </View>
    </ScrollView>
  );
}