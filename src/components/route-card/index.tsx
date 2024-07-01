import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import image from '../../assets/bus.png';
import {styles} from './styles.ts';
import {TEXT, TITLE} from '../../styles/text.ts';

interface RouteCardProps {
  title: string;
  route: string;
  onPress: () => void;
}

const RouteCard: React.FC<RouteCardProps> = ({title, route, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={[TITLE.h2, styles.text]}>{title}</Text>
      <Text style={[TEXT.normal, styles.text]}>{route}</Text>
    </View>
    <Image source={image} />
  </TouchableOpacity>
);
export default RouteCard;
