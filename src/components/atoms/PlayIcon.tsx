import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Appearance} from 'react-native';
import Colors from '../../constants/Colors';

export function PlayIcon() {
  return (
    <AntDesign
      name="play"
      size={60}
      color={Colors[Appearance.getColorScheme() ?? 'dark'].background}
    />
  );
}

export function PauseIcon() {
  return (
    <AntDesign
      name="pausecircle"
      size={60}
      color={Colors[Appearance.getColorScheme() ?? 'dark'].background}
    />
  );
}
