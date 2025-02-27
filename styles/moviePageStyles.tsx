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
    marginBottom: 20,
  },
  poster: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginLeft: 15,
    justifyContent: "center",
  },
  label: {
    color: '#AAAAAA',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    flexWrap: 'wrap', 
  },
  descriptionBox: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
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
    marginTop: 30, 
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
