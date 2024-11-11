import type {StyleProp, ViewStyle} from 'react-native';
import {Video} from '../../types/videoTypes';

export type GapProps = {
  size?: number;
};

export type OutlineWrapperProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export type AvatarProps = {
  item: Video;
};

export type MuteProps = {
  status: boolean;
  onPress?: () => void;
};

export type SliderTimeProps = {
  currentTime: number;
  duration: number;
  isSliding: boolean;
};

export type SliderProps = {
  currentTime: number;
  duration: number;
  isSliding: boolean;
  setCurrentTime: (value: number) => void;
  onSlideStart: () => void;
  onSlideComplete: (value: number) => void;
};
