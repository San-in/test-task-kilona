import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles.ts';
import {TEXT} from '../../styles/text.ts';

interface SeatProps {
  number: number;
  isReserved: boolean;
}

const Seat: React.FC<SeatProps> = ({number, isReserved}) => (
  <View style={[styles.seat, isReserved ? styles.reserved : styles.available]}>
    <Text style={[TEXT.large]}>{number}</Text>
  </View>
);

export default Seat;
