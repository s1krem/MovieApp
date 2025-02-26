import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import topBarStyles from "../styles/topBarStyles";
import Icon from "react-native-vector-icons/FontAwesome";

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ title, showBackButton = false }) => {
  const router = useRouter();

  return (
    <SafeAreaView style={topBarStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={topBarStyles.innerContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={() => router.back()} style={topBarStyles.backButton}>
            <Icon name="chevron-left" size={18} color="white" />
          </TouchableOpacity>
        )}
        <Text style={topBarStyles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;