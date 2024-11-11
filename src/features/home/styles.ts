import {Appearance, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].background,
    justifyContent: 'center',
  },
});

export default styles;
