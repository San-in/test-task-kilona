import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles.ts';
import {TEXT, TITLE} from '../../styles/text.ts';

interface TagProps {
  name: string;
  route: string;
}

const Tag: React.FC<TagProps> = ({name, route}) => (
  <View style={styles.tag}>
    <Text style={[TITLE.h3, styles.text]}>{name}</Text>
    <Text style={[TEXT.xSmall, styles.text]}>{route}</Text>
  </View>
);

export default Tag;
