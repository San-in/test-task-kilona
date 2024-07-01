import React from 'react';
import {Animated, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../types/navigation';
import {SCREENS} from '../../types/enums.ts';
import {useAppDispatch} from '../../store/hooks.ts';
import {setTabBatStatus} from '../../store/slices/tabBarSlice.ts';
import data from '../../bd/data.json';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {common} from '../../styles/common.ts';
import ScrollView = Animated.ScrollView;
import Header from '../../components/title';
import RouteCard from '../../components/route-card';
import {styles} from './styles.ts';
import {setBus} from '../../store/slices/busSlice.ts';

interface HomeScreenProps {
  navigation: BottomTabNavigationProp<RootStackParamList, SCREENS.HOME>;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const goToInfoScreen = (id: string) => {
    dispatch(setBus(id));
    dispatch(setTabBatStatus(true));
    navigation.navigate(SCREENS.INFO);
  };
  return (
    <SafeAreaView style={common.page}>
      <View>
        <Header text={'Select your route'} align={'center'} />
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={styles.list}>
          {data.busRoutes.map(({id, name, route}) => {
            return (
              <RouteCard
                key={id}
                title={name}
                route={route}
                onPress={() => {
                  goToInfoScreen(id);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
