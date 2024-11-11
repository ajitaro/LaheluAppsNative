import {
  Appearance,
  type ImageStyle,
  StyleSheet,
  type ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';
import Text from '../../constants/Text';
import {dimensions} from '../styles';

export const BORDER_RADIUS = 8;
export const ICON_SIZE = 24;

const View: Record<string, ViewStyle> = {
  outline: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors[Appearance.getColorScheme() ?? 'dark'].text,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    padding: 6,
    flexDirection: 'row',
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  circle: {
    width: 22,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].background,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Image: Record<string, ImageStyle> = {
  circle: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
};

const styles = StyleSheet.create({
  sawerContainer: View.container,
  sawerCircle: View.circle,
  sawerText: {
    ...Text.dark,
    ...Text.bold,
    ...Text.medium,
  },
  avatar: Image.circle,
  roundOutlineContainer: {...View.outline, borderRadius: BORDER_RADIUS},
  outlineContainer: View.outline,
  mute: {
    position: 'absolute',
    zIndex: 3,
    right: 18,
    bottom: 56,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].text,
    padding: 8,
    borderRadius: 90,
  },
  slider: {
    zIndex: 4,
    width: dimensions.width,
    height: 40,
  },
  timeContainer: {
    position: 'absolute',
    bottom: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 22,
    backgroundColor: Colors[Appearance.getColorScheme() ?? 'dark'].text,
    opacity: 0.8,
  },
  timeText: {
    color: Colors[Appearance.getColorScheme() ?? 'dark'].background,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
