import {Appearance, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors[Appearance.getColorScheme() ?? 'dark'].text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default globalStyles;
