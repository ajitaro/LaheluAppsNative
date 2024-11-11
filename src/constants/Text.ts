import {Appearance, type TextStyle} from 'react-native';
import Colors from './Colors';

const Text: Record<string, TextStyle> = {
  base: {
    color: Colors[Appearance.getColorScheme() ?? 'dark'].text,
  },
  dark: {
    color: Colors[Appearance.getColorScheme() ?? 'dark'].background,
  },
  bold: {
    fontWeight: 'bold',
  },
  big: {
    fontSize: 18,
  },
  medium: {
    fontSize: 16,
  },
};

export default Text;
