import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Gap from './Gap';
import Colors from '../../constants/Colors';

function Sawer(): React.ReactElement {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.sawerContainer}>
      <View style={styles.sawerCircle}>
        <FontAwesome name="dollar" size={14} color={Colors.yellow} />
      </View>
      <Gap size={4} />
      <Text style={styles.sawerText}>Sawer</Text>
    </TouchableOpacity>
  );
}

export default Sawer;
