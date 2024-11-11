import {View} from 'react-native';
import React from 'react';
import {Comment, Gap, Sawer, Vote, Forward} from '../atoms';
import styles from './styles';
import componentStyles from '../styles';

function ContentFooter() {
  return (
    <View style={styles.footerContainer}>
      <Gap size={8} />
      <View>
        <Sawer />
      </View>
      <Gap size={10} />
      <View style={[componentStyles.row, styles.footerSpaceBetween]}>
        <View style={componentStyles.row}>
          <Vote />
          <Gap size={8} />
          <Comment />
        </View>
        <Gap size={8} />
        <Forward />
      </View>
    </View>
  );
}

export default ContentFooter;
