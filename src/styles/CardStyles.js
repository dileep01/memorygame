import {StyleSheet} from 'react-native';
const CardStyles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: '#3CB371',
    borderWidth: 2,
    borderColor: '#3CB371',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    width: 80,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#DCDCDC',
    borderWidth: 2,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
});
export default CardStyles;
