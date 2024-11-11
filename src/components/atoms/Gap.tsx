import {View} from 'react-native';
import React from 'react';
import type {GapProps} from './types';

function Gap({size}: GapProps) {
  return <View style={{margin: size || 2}} />;
}

export default Gap;
