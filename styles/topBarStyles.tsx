import { StyleSheet } from "react-native";

const topBarStyles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingBottom: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
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
