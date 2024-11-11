import {Dimensions, StyleSheet} from 'react-native';
import Text from '../constants/Text';

const styles = StyleSheet.create({
  regular: {
    ...Text.base,
  },
  bold: {
    ...Text.base,
    ...Text.bold,
  },
  title: {
    ...Text.base,
    ...Text.bold,
    ...Text.big,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const dimensions = Dimensions.get('window');
export const screenRatio = dimensions.width / dimensions.height;

export default styles;
