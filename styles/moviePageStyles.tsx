import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const moviePageStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#121212",
    padding: 20,
    minHeight: height, 
  },

  topContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  poster: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  descriptionBox: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "left",
  },

  trailerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  noTrailerText: {
    color: "#bbb",
    fontSize: 16,
    textAlign: "center",
  },
});

export default moviePageStyles;
