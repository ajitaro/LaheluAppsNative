import {View, Text, TouchableOpacity, Appearance} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import componentStyles from '../styles';
import Gap from './Gap';
import styles, {BORDER_RADIUS, ICON_SIZE} from './styles';
import Colors from '../../constants/Colors';

export function UpVote() {
  return (
    <View>
      <Entypo
        name="arrow-up"
        size={ICON_SIZE}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].text}
      />
    </View>
  );
}

export function DownVote() {
  return (
    <View>
      <Entypo
        name="arrow-down"
        size={ICON_SIZE}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].text}
      />
    </View>
  );
}

function Vote() {
  return (
    <View style={[componentStyles.row, {height: '100%'}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.outlineContainer,
          {
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
          },
        ]}>
        <UpVote />
        <Gap size={2} />
        <Text style={componentStyles.bold}>999</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.outlineContainer,
          {
            borderTopRightRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,
          },
        ]}>
        <DownVote />
      </TouchableOpacity>
    </View>
  );
}

export default Vote;
