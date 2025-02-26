import { StyleSheet } from 'react-native';

const movieListStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  movieCard: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: 130,
  },
  movieContainer: {
    alignItems: 'center', 
    paddingBottom: 10, 
  },
  moviePoster: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    width: 120,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default movieListStyles;
