import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { id, title, poster_path, overview } = useLocalSearchParams();

  return (
    <View>
      <Image source={{ uri: `${IMAGE_BASE_URL}${poster_path}` }} style={{ width: 300, height: 450 }} />
      <Text>{title}</Text>
      <Text>{overview || "No description available."}</Text>
    </View>
  );
}
