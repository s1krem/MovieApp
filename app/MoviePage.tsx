import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { useFetchTrailer } from "../services/useFetchTrailer";
import YoutubePlayer from "react-native-youtube-iframe";
import moviePageStyles from "../styles/moviePageStyles";
import MovieList from "../components/MovieList";
import TopBar from '../components/TopBar';
import MovieDetails from '../components/MovieDetails';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const { width } = Dimensions.get("window");

export default function MoviePage() {
  const { id, title, poster_path, overview, category } = useLocalSearchParams();
  const movieId = id.toString();
  const { trailer, loading, error } = useFetchTrailer(movieId);

  return (
    <ScrollView contentContainerStyle={moviePageStyles.scrollContainer}>
      <TopBar title="Movie Details" showBackButton />
      <View style={moviePageStyles.topContainer}>
        <Image source={{ uri: `${IMAGE_BASE_URL}${poster_path}` }} style={moviePageStyles.poster} />
        <View></View>
        <MovieDetails  movieId={movieId} />
      </View>
      <View style={moviePageStyles.descriptionBox}>
        <Text style={moviePageStyles.title}>{title}</Text>
        <Text style={moviePageStyles.description}>{overview || "No description available."}</Text>
      </View>
      <Text style={moviePageStyles.title}>Official trailer :</Text>
      <View style={moviePageStyles.trailerContainer}>

        {loading ? (
          <ActivityIndicator size="large" color="#E50914" />
        ) : error ? (
          <Text style={moviePageStyles.errorText}>{error?.toString() || "Unknown error"}</Text>
        ) : trailer ? (
          <YoutubePlayer
            height={220}
            width={width - 40}
            play={false}
            videoId={trailer.split("v=")[1]}
          />
        ) : (
          <Text style={moviePageStyles.noTrailerText}>No trailer available</Text>
        )}
        
      </View>
      <View>
          <MovieList category={category.toString()} title="Related movies" excludeMovieId={movieId} />
      </View>
    </ScrollView>
  );
}
