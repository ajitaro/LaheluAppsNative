import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import Video from 'react-native-video';
import type {OnLoadData, OnProgressData, VideoRef} from 'react-native-video';
import {VideProps} from './types';
import styles from './styles';
import {PauseIcon, PlayIcon, Mute, Slider} from '../atoms';

const videoSourceTemp =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoPlayer = forwardRef((props: VideProps, ref) => {
  const {item, index} = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const videoRef = useRef<VideoRef>(null);
  const playIconOpacity = useRef(new Animated.Value(0)).current;
  const playIconScale = useRef(new Animated.Value(1)).current;

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const animatePlayIcon = () => {
    playIconScale.setValue(1);
    Animated.parallel([
      Animated.sequence([
        Animated.timing(playIconOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(playIconOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(playIconScale, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const onClickVideo = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause();
    } else {
      setIsPlaying(true);
      videoRef.current?.resume();
    }

    animatePlayIcon();
  };

  const onPressMute = () => {
    setIsMuted(!isMuted);
  };

  const onProgress = (data: OnProgressData) => {
    if (!isSliding) {
      setCurrentTime(data.currentTime);
    }
  };

  const onSlideStart = () => {
    setIsSliding(true);
  };

  const onSlideComplete = (value: number) => {
    setIsSliding(false);
    videoRef.current?.seek(value);
    setCurrentTime(value);
  };

  useImperativeHandle(ref, () => ({
    play: () => {
      if (shouldPlay) {
        setIsPlaying(true);
        videoRef.current?.resume();
      }
    },
    pause: () => {
      setIsPlaying(false);
      videoRef.current?.pause();
    },

    getIndex: (param: number) => {
      if (param !== index) {
        videoRef.current?.pause();
        setIsPlaying(false);
      } else {
        setShouldPlay(true);
      }
    },
  }));

  const playIcon = isPlaying ? <PlayIcon /> : <PauseIcon />;

  return (
    <View style={styles.wrapper}>
      <Mute status={isMuted} onPress={onPressMute} />
      <TouchableWithoutFeedback onPress={onClickVideo}>
        <View style={styles.touchableOverlay} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.playIcon,
          {opacity: playIconOpacity, transform: [{scale: playIconScale}]},
        ]}>
        {playIcon}
      </Animated.View>
      <Video
        source={{uri: item.videoFile?.link ?? videoSourceTemp}}
        ref={videoRef}
        style={styles.video}
        repeat
        muted={isMuted}
        onLoad={onLoad}
        onProgress={onProgress}
      />
      <Slider
        currentTime={currentTime}
        duration={duration}
        isSliding={isSliding}
        setCurrentTime={setCurrentTime}
        onSlideStart={onSlideStart}
        onSlideComplete={onSlideComplete}
      />
    </View>
  );
});

export default VideoPlayer;
