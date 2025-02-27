import { StyleSheet } from "react-native";

const topBarStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#121212",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
});

export default topBarStyles;
