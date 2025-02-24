import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  poster: {
    width: 120,
    height: 200,
    borderRadius: 6,
    marginRight: 10,
  },
  movieContainer:{
    alignItems: 'center',
    marginHorizontal: 10,
    width: 120,
    paddingVertical: 10,
  },
  movieTitle:{
    textAlign: 'center',
    width: 120,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  detailsImage: {
    width: 300,
    height: 450,
    borderRadius: 10,
  },
});

export default globalStyles;