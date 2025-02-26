import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useFetchTrailer } from "../services/useFetchTrailer";
import YoutubePlayer from "react-native-youtube-iframe";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { id, title, poster_path, overview } = useLocalSearchParams();
  const movieId = id.toString();
  const {trailer, loading, error} = useFetchTrailer(movieId);

  return (
    <View>
      <Image source={{ uri: `${IMAGE_BASE_URL}${poster_path}` }} style={{ width: 300, height: 450 }} />
      <Text>{title}</Text>
      <Text>{overview || "No description available."}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error?.toString() ||"unknown"}</Text>
      ) : trailer ? (
        <YoutubePlayer height={250} play={false} videoId={trailer.split('v=')[1]} />
      ) : (
        <Text>No trailer available</Text>
      )}
    </View>
  );
}
