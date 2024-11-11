import {Appearance} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {ICON_SIZE} from './styles';
import OutlineWrapper from './OutlineWrapper';
import Colors from '../../constants/Colors';

function Forward() {
  const onPress = () => {};

  return (
    <OutlineWrapper onPress={onPress}>
      <Entypo
        name="forward"
        size={ICON_SIZE}
        color={Colors[Appearance.getColorScheme() ?? 'dark'].text}
      />
    </OutlineWrapper>
  );
}

export default Forward;
