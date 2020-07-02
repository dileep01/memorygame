import {StyleSheet} from 'react-native';
const GameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titletext: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  levelScoreContainer: {
    marginTop: 50,
  },
  level: {
    width: '30%',
    position: 'absolute',
    left: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    width: '30%',
    position: 'absolute',
    right: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  card: {
    flex: 1,
    alignItems: 'center',
  },
  card_text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  flatlistRow: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameScreenStyles;
