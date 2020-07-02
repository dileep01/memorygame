import React, {Component} from 'react';
import {View, Text, Alert, SafeAreaView} from 'react-native';
import {generateCards} from '../utils/helper';
import Card from '../components/Card';
import styles from '../styles/GameScreenStyles';
class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.runningInterval = null;
    this.interval = () =>
      (this.runningInterval = setInterval(() => {
        this.props.updateTimer(1);
      }, 1000));
    this.props.updateCards(generateCards(this.props.appState.level));
  }

  componentDidMount() {
    this.showAlert('Memory Game', "Let's start the game", [
      {
        text: 'START GAME',
        onPress: () => {
          this.interval();
        },
      },
    ]);
  }

  componentDidUpdate() {
    const {cards, selectedPairs, timer, level} = this.props.appState;
    if (cards.length / 2 === selectedPairs.length) {
      clearInterval(this.runningInterval);
      this.showAlert(
        'Level Completed',
        'Please click next button to play the next level',
        [
          {
            text: 'NEXT',
            onPress: () => {
              this.nextLevel();
            },
          },
        ],
      );
    }

    if (timer === 0) {
      this.tryAgain('If you wish to start again please press try again.');
    }

    if (level > 3) {
      this.tryAgain('You have finished the game successfully!');
    }
  }
  showAlert = (title, message, buttons) => {
    Alert.alert(title, message, buttons);
  };

  tryAgain = text => {
    clearInterval(this.runningInterval);
    this.showAlert('Game Over', text, [
      {
        text: 'TRY AGAIN',
        onPress: () => {
          this.props.setTimer(60, this.interval());
          this.props.updateState({
            cards: generateCards(1),
            level: 1,
            selectedPairs: [],
            currentSelection: [],
            score: 0,
          });
        },
      },
    ]);
  };

  nextLevel = () => {
    this.props.updateState({
      cards: generateCards(this.props.appState.level + 1),
      level: this.props.appState.level + 1,
      selectedPairs: [],
      currentSelection: [],
      score: this.props.appState.score,
    });
    this.props.setTimer(60 * this.props.appState.level, this.interval());
  };

  onCardClicked = key => {
    let appState = Object.assign({}, this.props.appState);
    let currentSelection = appState.currentSelection;
    let selectedPairs = appState.selectedPairs;
    let gameCards = appState.cards;
    let score = appState.score;

    let cardIndex = 0;
    for (var i = 0; i < gameCards.length; i++) {
      if (gameCards[i].key === key) {
        cardIndex = i;
      }
    }

    if (
      gameCards[cardIndex]['isOpened'] === false &&
      selectedPairs.indexOf(gameCards[cardIndex]['number']) === -1
    ) {
      gameCards[cardIndex]['isOpened'] = true;
      currentSelection.push({
        index: cardIndex,
        number: gameCards[cardIndex]['number'],
        key: gameCards[cardIndex]['key'],
      });

      if (currentSelection.length === 2) {
        if (currentSelection[0]['number'] === currentSelection[1]['number']) {
          score += 1;
          selectedPairs.push(gameCards[cardIndex]['number']);
          gameCards[currentSelection[0]['index']]['disabled'] = true;
          gameCards[currentSelection[1]['index']]['disabled'] = true;
        } else {
          gameCards[currentSelection[0]['index']]['isOpened'] = false;
          setTimeout(() => {
            gameCards[cardIndex]['isOpened'] = false;
            this.props.updateCards(gameCards);
          }, 500);
        }
        currentSelection = [];
      }

      this.props.updateState({
        currentSelection,
        selectedPairs,
        cards: gameCards,
        score,
        level: appState.level,
      });
    } else {
      gameCards[cardIndex]['isOpened'] = false;
      currentSelection = [];
      this.props.updateCards(gameCards);
    }
  };

  render() {
    const {level, score, timer, cards} = this.props.appState;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titletext}>MEMORY GAME</Text>

          <View style={styles.levelScoreContainer}>
            <View style={styles.level}>
              <Text style={styles.heading}>Level</Text>
              <Text style={{fontSize: 14}}>{level}</Text>
            </View>

            <View style={styles.score}>
              <Text style={styles.heading}>Score</Text>
              <Text style={{fontSize: 14}}>{score}</Text>
            </View>
          </View>
          <View style={styles.timer}>
            <Text style={styles.heading}>Time Left</Text>
            <Text style={{fontSize: 14}}>{timer}</Text>
          </View>
          <View style={styles.gameContainer}>
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  id={card.key}
                  level={level}
                  onCardPress={this.onCardClicked}
                  isOpened={card.isOpened}
                  disabled={card.disabled}>
                  {card.number}
                </Card>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default GameScreen;
