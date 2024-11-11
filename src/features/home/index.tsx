import {View} from 'react-native';
import React from 'react';
import InfiniteScroll from '../../components/organisms/InfiniteScroll';
import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <InfiniteScroll />
    </View>
  );
}

export default Home;
