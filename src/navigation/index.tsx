import React, {useCallback} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../types/enums.ts';
import {RootStackParamList} from '../types/navigation';
import {HomeScreen} from '../screens/Home';
import {MapScreen} from '../screens/Map';
import {InfoScreen} from '../screens/Info';
import BottomTabBar from '../components/bottom-tab-bar';

const Tab = createBottomTabNavigator<RootStackParamList>();

function BottomTabBarComponent(props: BottomTabBarProps) {
  return <BottomTabBar {...props} />;
}
export const Navigation: React.FC = () => {
  const tabBar = useCallback(BottomTabBarComponent, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={tabBar}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREENS.HOME}>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.MAP} component={MapScreen} />
        <Tab.Screen name={SCREENS.INFO} component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
