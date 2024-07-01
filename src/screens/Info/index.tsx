import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BusRoute} from '../../types/types';
import {useAppSelector} from '../../store/hooks.ts';
import {selectBus} from '../../store/slices/busSlice.ts';
import Header from '../../components/title';
import Tag from '../../components/tag';
import {getRouteById} from '../../services/getRouteById.ts';
import {common} from '../../styles/common.ts';
import {styles} from './styles.ts';
import {TEXT} from '../../styles/text.ts';
import Seat from '../../components/seat';
import {splitArrayIntoFour} from '../../services/splitArrayIntoFour.ts';

export const InfoScreen: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<BusRoute | null>(null);
  const routeId = useAppSelector(selectBus);
  const [firstQuarter, secondQuarter, thirdQuarter, fourthQuarter] =
    splitArrayIntoFour(currentRoute?.seats || []);

  useEffect(() => {
    const route = getRouteById(routeId || '');
    if (route) {
      setCurrentRoute(route);
    }
  }, [routeId]);
  return (
    <SafeAreaView>
      <View style={common.header}>
        <View style={common.title}>
          <Header text={'Seat availability'} />
        </View>
        {currentRoute && (
          <View style={[common.headerContent, styles.infoHeader]}>
            <Tag name={currentRoute.name} route={currentRoute.route} />
            <View style={styles.legend}>
              <View style={styles.legendValue}>
                <Text style={TEXT.small}>Reserved</Text>
                <View style={[styles.legendMarker, styles.reserved]} />
              </View>
              <View style={styles.legendValue}>
                <Text style={TEXT.small}>Available</Text>
                <View style={styles.legendMarker} />
              </View>
            </View>
          </View>
        )}
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.seatsContainer}>
          <View style={styles.seatsLine}>
            <View style={styles.seatsRow}>
              {firstQuarter.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.occupied}
                />
              ))}
            </View>
            <View style={styles.seatsRow}>
              {secondQuarter.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.occupied}
                />
              ))}
            </View>
          </View>
          <View style={styles.seatsLine}>
            <View style={styles.seatsRow}>
              {thirdQuarter.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.occupied}
                />
              ))}
            </View>
            <View style={styles.seatsRow}>
              {fourthQuarter.map(seat => (
                <Seat
                  key={seat.seatNumber}
                  number={seat.seatNumber}
                  isReserved={seat.occupied}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
