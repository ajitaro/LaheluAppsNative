import {Appearance, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';

function More() {
  const toggleAppearance = () => {
    if (Appearance.getColorScheme() === 'dark') {
      Appearance.setColorScheme('light');
      return;
    }
    Appearance.setColorScheme('dark');
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={toggleAppearance}>
      <Feather
        name="more-horizontal"
        size={32}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].text}
      />
    </TouchableOpacity>
  );
}

export default More;
