import {View, Image, Text} from 'react-native';
import React from 'react';
import {AvatarProps} from './types';
import styles from './styles';
import componentsStyles from '../styles';
import Gap from './Gap';

function Avatar(props: AvatarProps) {
  const {item} = props;
  return (
    <View style={componentsStyles.row}>
      <Image source={{uri: item.image}} style={styles.avatar} />
      <Gap size={6} />
      <Text style={componentsStyles.regular}>{item.user.name}</Text>
    </View>
  );
}

export default Avatar;
