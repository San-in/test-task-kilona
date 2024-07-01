import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {Marker} from 'react-native-maps';
import {BusRoute, Position} from '../../types/types';
import {COLORS} from '../../styles/colors.ts';
import {requestLocationPermission} from '../../services/requestLocationPermission.ts';
import Header from '../../components/title';
import {styles} from './styles.ts';
import Tag from '../../components/tag';
import SpeedometerIcon from '../../assets/icons/speedometer-icon.tsx';
import {TEXT} from '../../styles/text.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectBus} from '../../store/slices/busSlice.ts';
import {getRouteById} from '../../services/getRouteById.ts';
import Geolocation from '@react-native-community/geolocation';
import {common} from '../../styles/common.ts';

export const MapScreen: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [currentRoute, setCurrentRoute] = useState<BusRoute | null>(null);
  const routeId = useAppSelector(selectBus);
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({latitude, longitude});
      },
      error => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    const getLocationAsync = async () => {
      const permissionGranted = await requestLocationPermission();
      if (permissionGranted) {
        getLocation();
      }
    };
    getLocationAsync();
  }, []);

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
          <Header text={'Location'} />
        </View>
        {currentRoute && (
          <View style={common.headerContent}>
            <Tag name={currentRoute.name} route={currentRoute.route} />
            <View style={styles.speedometer}>
              <SpeedometerIcon />
              <Text style={[TEXT.normal, styles.speedometerText]}>
                {currentRoute.averageSpeed}kmph
              </Text>
            </View>
          </View>
        )}
      </View>
      {currentPosition ? (
        <MapView
          region={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.1822,
            longitudeDelta: 0.0841,
          }}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
            pinColor={'blue'}
            title={'You here!'}
          />
        </MapView>
      ) : (
        <ActivityIndicator color={COLORS.accent} />
      )}
    </SafeAreaView>
  );
};
