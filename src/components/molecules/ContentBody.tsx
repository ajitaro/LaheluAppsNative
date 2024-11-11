import {View, Text, Image, TouchableOpacity, Appearance} from 'react-native';
import React, {forwardRef, useEffect} from 'react';
import styles, {dimensions} from '../styles';
import {BadRatio, BadRatioProps} from './types';
import FullContentBody from './FullContentBody';
import type {Video} from '../../types/videoTypes';
import Colors from '../../constants/Colors';
import VideoPlayer from '../reusable/Video';

function BodyImage({item}: {item: Video}) {
  const [badRatio, setBadRatio] = React.useState<BadRatioProps>({
    type: BadRatio.None,
  });
  const [visible, setVisible] = React.useState(false);

  const onFullImage = () => {
    setVisible(true);
  };

  useEffect(() => {
    Image.getSize(item.image, (width, height) => {
      const ratio = width / height;
      if (ratio > 2) {
        setBadRatio({type: BadRatio.Horizontal, width, height});
      } else if (ratio < 0.5) {
        setBadRatio({type: BadRatio.Vertical, width, height});
      }
    });
  }, [item.image]);

  if (badRatio.type !== BadRatio.None) {
    return (
      <View>
        <FullContentBody
          visible={visible}
          badRatio={badRatio}
          imageUrl={item.image}
          onClose={() => setVisible(false)}
        />
        <Image
          source={{uri: item.image}}
          width={dimensions.width}
          height={dimensions.width}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            width: '100%',
            backgroundColor:
              Colors[Appearance.getColorScheme() ?? 'dark'].background,
            opacity: 0.75,
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onFullImage}>
          <Text style={styles.bold}>Lihat Gambar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Image
      source={{uri: item.image}}
      width={dimensions.width}
      height={dimensions.width}
      resizeMode="contain"
    />
  );
}

const ContentBody = forwardRef(
  ({item, index}: {item: Video; index: number}, ref) => {
    return (
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
        }}>
        <VideoPlayer ref={ref} item={item} index={index} />
        {/* <BodyImage item={item} /> */}
      </View>
    );
  },
);

export default ContentBody;
