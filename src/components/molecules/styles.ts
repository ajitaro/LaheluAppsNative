import {StyleSheet} from 'react-native';
import {dimensions} from '../styles';
import {HORIZONTAL_SPACING} from '../../constants/Spacing';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dimensions.width - HORIZONTAL_SPACING * 2,
    justifyContent: 'space-between',
  },
  footerContainer: {
    flex: 1,
    width: dimensions.width,
    alignItems: 'flex-start',
    paddingHorizontal: HORIZONTAL_SPACING,
  },
  footerSpaceBetween: {
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
  },
});

export default styles;
