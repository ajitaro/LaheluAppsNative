import {Appearance, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../constants/Colors';
import {MuteProps} from './types';
import styles from './styles';

function Mute(props: MuteProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.mute}
      onPress={props.onPress}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <Octicons
        name={props.status ? 'mute' : 'unmute'}
        size={14}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].background}
      />
    </TouchableOpacity>
  );
}

export default Mute;
