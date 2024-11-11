import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {OutlineWrapperProps} from './types';

function OutlineWrapper({children, style = {}, onPress}: OutlineWrapperProps) {
  const Wrapper = onPress ? TouchableOpacity : View;
  return (
    <Wrapper
      activeOpacity={0.8}
      style={[styles.roundOutlineContainer, style]}
      onPress={onPress}>
      {children}
    </Wrapper>
  );
}

export default OutlineWrapper;
