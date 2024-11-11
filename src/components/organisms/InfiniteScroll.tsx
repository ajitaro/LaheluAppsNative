import {ActivityIndicator, FlatList, Platform, StatusBar} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {dimensions} from '../styles';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import ContentView from './ContentView';
import type {Video, VideoResponse} from '../../types/videoTypes';
import {useAxios} from '../../hooks/useAxios';
import {InfoProps} from './types';

function InfiniteScroll(): React.ReactElement {
  const [data, setData] = useState<Video[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const {fetchData} = useAxios();
  const refs = useRef<Record<number, React.RefObject<any>>>({});

  const getRefForItem = (index: number) => {
    if (!refs.current[index]) {
      refs.current[index] = React.createRef<any>();
    }
    return refs.current[index];
  };

  const itemHeight =
    dimensions.height -
    useBottomTabBarHeight() -
    (StatusBar?.currentHeight ?? 0);

  const playActiveIndex = () => {
    const itemRef = getRefForItem(activeIndex);
    itemRef.current?.play();
  };

  const onViewableItemsChanged = (info: InfoProps<Video>): void => {
    const viewAbleIndex = info.viewableItems?.[0]?.index ?? 0;
    const itemRef = getRefForItem(viewAbleIndex);
    itemRef.current?.getIndex(viewAbleIndex);
    setActiveIndex(viewAbleIndex);
  };

  const renderItem = ({item, index}: {item: Video; index: number}) => {
    const itemRef = getRefForItem(index);

    return (
      <ContentView
        ref={itemRef}
        item={item}
        index={index}
        itemHeight={itemHeight}
      />
    );
  };

  const fetching = (response: any, isFirst: boolean) => {
    const newData: Video[] = [];
    response.videos.forEach((item: VideoResponse) => {
      const tempData = {
        id: item.id,
        image: item.image,
        url: item.url,
        user: item.user,
        width: item.width,
        height: item.height,
        duration: item.duration,
        videoFile: item.video_files.find(f => f.quality === 'sd'),
      };
      newData.push(tempData);
    });

    const newUrl = response.next_page.replace('/v1', '').replace('/?', '?');
    setNextPage(newUrl);

    if (isFirst) {
      setData(newData);
    } else {
      setData(prev => [...prev, ...newData]);
    }
  };

  const onEndReached = () => {
    if (nextPage) {
      fetchData({url: nextPage}, true, ({response}) => {
        fetching(response, false);
      });
    }
  };

  useEffect(() => {
    fetchData({}, true, ({response}) => {
      fetching(response, true);
    });
  }, [fetchData]);

  useEffect(() => {
    if (data.length > 0 && activeIndex === 0) {
      setTimeout(() => {
        playActiveIndex();
      }, 500);
    }
  }, [data.length, activeIndex]);

  return (
    <FlatList
      data={data}
      extraData={data}
      keyExtractor={(item, index) => `item-scroll-${index}`}
      renderItem={renderItem}
      snapToInterval={itemHeight}
      contentContainerStyle={{paddingBottom: useBottomTabBarHeight()}}
      decelerationRate="fast"
      showsVerticalScrollIndicator={Platform.OS === 'web' || false}
      onViewableItemsChanged={onViewableItemsChanged}
      onMomentumScrollEnd={playActiveIndex}
      onEndReached={onEndReached}
      ListFooterComponent={<ActivityIndicator size="large" />}
    />
  );
}

export default InfiniteScroll;
