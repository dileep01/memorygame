import {Dimensions} from 'react-native';
const deviceWidth = Math.round(Dimensions.get('window').width);
window._levelCardsIncrementer = 1;

const shuffleCards = cards => {
  var i = cards.length,
    j,
    temp;
  if (i == 0) return cards;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};

const cardCloning = cards => {
  const secondSetCards = JSON.parse(JSON.stringify(cards));
  return shuffleCards(cards.concat(secondSetCards));
};
const getNoOfCards = level => {
  switch (parseInt(level)) {
    case 1:
      return 2;
    case 2:
      return 8;
    case 3:
      return 16;
    default:
      break;
  }
};

export const generateCards = level => {
  var cardArray = [];
  var noOfCards = getNoOfCards(level);
  for (var i = 0; i < noOfCards; i++) {
    var cardObj = {};
    cardObj['number'] = cardObj['key'] = i;
    cardObj['isOpened'] = false;
    cardObj['disabled'] = false;
    cardArray.push(cardObj);
  }
  var clonedCards = cardCloning(cardArray);
  return clonedCards.map((item, index) => {
    item['key'] = index;
    return item;
  });
};

export const getCardSize = level => {
  switch (level) {
    case 1:
      return {width: deviceWidth / 2 - 10, height: deviceWidth / 2};
    case 2:
      return {width: deviceWidth / 4 - 10, height: 100};
    case 3:
      return {width: 70, height: 50};
    default:
      break;
  }
};
