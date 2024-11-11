import {View, Text, Appearance} from 'react-native';
import React from 'react';
import RNSlider from '@react-native-community/slider';
import styles from './styles';
import {SliderProps, SliderTimeProps} from './types';
import Colors from '../../constants/Colors';

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

function SliderTime(props: SliderTimeProps) {
  if (!props.isSliding) {
    return null;
  }
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>
        {formatTime(props.currentTime)}/{formatTime(props.duration)}
      </Text>
    </View>
  );
}

function Slider(props: SliderProps) {
  const primaryColor = Colors[Appearance.getColorScheme() ?? 'dark'].primary;
  return (
    <>
      <SliderTime
        currentTime={props.currentTime}
        duration={props.duration}
        isSliding={props.isSliding}
      />
      <RNSlider
        style={styles.slider}
        value={props.currentTime}
        minimumValue={0}
        maximumValue={props.duration}
        onValueChange={value => props.setCurrentTime(value)}
        onSlidingStart={props.onSlideStart}
        onSlidingComplete={props.onSlideComplete}
        minimumTrackTintColor={primaryColor}
        maximumTrackTintColor={
          Colors[Appearance.getColorScheme() ?? 'dark'].text
        }
        thumbTintColor={props.isSliding ? primaryColor : 'transparent'}
      />
    </>
  );
}

export default Slider;
