// import { View, Text, Appearance } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import componentStyles from '../styles';
import OutlineWrapper from './OutlineWrapper';
import {ICON_SIZE} from './styles';
import Colors from '../../constants/Colors';
import {Appearance, Text} from 'react-native';
import Gap from './Gap';

function Comment() {
  const onPress = () => {};

  return (
    <OutlineWrapper onPress={onPress}>
      <MaterialCommunityIcons
        name="comment-text-outline"
        size={ICON_SIZE}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].text}
      />
      <Gap size={4} />
      <Text style={componentStyles.bold}>25</Text>
    </OutlineWrapper>
  );
}

export default Comment;
