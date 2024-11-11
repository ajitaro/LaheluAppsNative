import React, {forwardRef} from 'react';

import {Appearance, View} from 'react-native';
import {ContentHeader, ContentBody, ContentFooter} from '../molecules';
import {VERTICAL_SPACING} from '../../constants/Spacing';
import type {Video} from '../../types/videoTypes';
import Colors from '../../constants/Colors';

type ContentViewProps = {
  item: Video;
  index: number;
  itemHeight: number;
};

const ContentView = forwardRef((props: ContentViewProps, ref) => {
  const {item, index, itemHeight} = props;

  return (
    <View
      style={{
        backgroundColor:
          Colors[Appearance.getColorScheme() ?? 'dark'].background,
        // flex: 1,
        height: itemHeight,
        paddingTop: VERTICAL_SPACING,
        alignItems: 'center',
      }}>
      <ContentHeader item={item} />
      <ContentBody ref={ref} item={item} index={index} />
      <ContentFooter />
    </View>
  );
});

export default ContentView;
