import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getCardSize} from '../utils/helper';
import styles from '../styles/CardStyles';
const Card = ({id, children, level, onCardPress, isOpened, disabled}) => {
  return (
    <>
      {isOpened ? (
        <View style={[styles.innerCard, getCardSize(level)]}>
          <Text style={styles.number}>{children}</Text>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.card, getCardSize(level)]}
          onPress={() => {
            onCardPress(id);
          }}
          disabled={disabled}>
          <View></View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Card;
