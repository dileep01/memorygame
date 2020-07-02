export const UPDATE_TIMER = 'UPDATE_TIMER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_CARD_NUMBERS = 'UPDATE_CARD_NUMBERS';
export const UPDATE_FULL_STATE = 'UPDATE_FULL_STATE';
export const SET_TIMER = 'SET_TIMER';

export function updateTimer(payload) {
  return {
    type: UPDATE_TIMER,
    payload,
  };
}
export function updateScore(payload) {
  return {
    type: UPDATE_SCORE,
    payload,
  };
}
export function updateCards(payload) {
  return {
    type: UPDATE_CARD_NUMBERS,
    payload,
  };
}
export function updateState(payload) {
  return {
    type: UPDATE_FULL_STATE,
    payload,
  };
}
export function setTimer(payload) {
  return {
    type: SET_TIMER,
    payload,
  };
}
