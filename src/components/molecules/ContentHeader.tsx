import {View, Text} from 'react-native';
import React from 'react';
import componentStyles from '../styles';
import {Avatar, Gap, More} from '../atoms';
import type {Video} from '../../types/videoTypes';
import styles from './styles';
import globalStyles from '../../styles';

function ContentHeader({item}: {item: Video}): React.ReactElement {
  return (
    <View style={globalStyles.flex1}>
      <View style={styles.headerContainer}>
        <Avatar item={item} />
        <More />
      </View>
      <Gap size={12} />
      <Text
        style={componentStyles.title}
        ellipsizeMode="tail"
        numberOfLines={2}>
        {item.id}
      </Text>
    </View>
  );
}

export default ContentHeader;
