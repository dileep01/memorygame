import {connect} from 'react-redux';
import GameScreen from '../screens/GameScreen';
import {
  updateTimer,
  updateScore,
  updateCards,
  updateState,
  setTimer,
} from '../actions/game.actions';
const mapStateToProps = state => {
  return {
    appState: state.gameReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTimer: time => {
      dispatch(updateTimer(time));
    },
    updateScore: score => {
      dispatch(updateScore(score));
    },

    updateCards: cards => {
      dispatch(updateCards(cards));
    },
    updateState: state => {
      dispatch(updateState(state));
    },
    setTimer: timer => {
      dispatch(setTimer(timer));
    },
  };
};

const GameScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen);
export default GameScreenContainer;
