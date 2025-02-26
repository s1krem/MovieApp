import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { useFetchTrailer } from "../services/useFetchTrailer";
import YoutubePlayer from "react-native-youtube-iframe";
import movieDetailStyles from "../styles/movieDetailStyles";
import MovieList from "../components/MovieList";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const { width } = Dimensions.get("window");

export default function MovieDetails() {
  const { id, title, poster_path, overview, category } = useLocalSearchParams();
  const movieId = id.toString();
  const { trailer, loading, error } = useFetchTrailer(movieId);

  return (
    <ScrollView contentContainerStyle={movieDetailStyles.scrollContainer}>
      <View style={movieDetailStyles.topContainer}>
        <Image source={{ uri: `${IMAGE_BASE_URL}${poster_path}` }} style={movieDetailStyles.poster} />
        <View style={movieDetailStyles.descriptionBox}>
          <Text style={movieDetailStyles.title}>{title}</Text>
          <Text style={movieDetailStyles.description}>{overview || "No description available."}</Text>
        </View>
      </View>
      <Text style={movieDetailStyles.title}>Official trailer :</Text>
      <View style={movieDetailStyles.trailerContainer}>

        {loading ? (
          <ActivityIndicator size="large" color="#E50914" />
        ) : error ? (
          <Text style={movieDetailStyles.errorText}>{error?.toString() || "Unknown error"}</Text>
        ) : trailer ? (
          <YoutubePlayer
            height={220}
            width={width - 40}
            play={false}
            videoId={trailer.split("v=")[1]}
          />
        ) : (
          <Text style={movieDetailStyles.noTrailerText}>No trailer available</Text>
        )}

        <View>
          <MovieList category={category.toString()} title="Related movies" />
        </View>
        
      </View>
    </ScrollView>
  );
}
