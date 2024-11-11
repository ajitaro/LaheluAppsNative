import {ScrollView, Image, Modal} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BadRatio, FullContentBodyProps} from './types';
import {dimensions} from '../styles';

function FullContentBody(props: FullContentBodyProps) {
  const {imageUrl, badRatio, visible, onClose} = props;
  const imageRatio = (badRatio.width || 100) / (badRatio.height || 100);

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <AntDesign
        name="closecircle"
        size={32}
        color="black"
        onPress={onClose}
        style={{alignSelf: 'flex-end'}}
      />
      <ScrollView horizontal={badRatio.type === BadRatio.Horizontal}>
        <Image
          source={{uri: imageUrl}}
          width={
            badRatio.type === BadRatio.Horizontal
              ? dimensions.height * imageRatio
              : dimensions.width
          }
          height={
            badRatio.type === BadRatio.Vertical
              ? dimensions.width / imageRatio
              : dimensions.height
          }
          resizeMode="cover"
        />
      </ScrollView>
    </Modal>
  );
}

export default FullContentBody;
