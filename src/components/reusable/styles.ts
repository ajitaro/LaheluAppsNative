import {Appearance, StyleSheet} from 'react-native';
import {dimensions} from '../styles';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 4,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  video: {
    zIndex: 0,
    width: dimensions.width,
    aspectRatio: 1,
    resizeMode: 'contain',
    // aspectRatio: 16 / 9,
  },
  playIcon: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default styles;
