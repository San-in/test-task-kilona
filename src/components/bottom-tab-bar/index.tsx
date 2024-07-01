import React, {memo} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconNav from '../nav-icon';
import {styles} from './styles.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectTabBar, setTabBatStatus} from '../../store/slices/tabBarSlice.ts';
import {COLORS} from '../../styles/colors.ts';

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state: routeState,
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(selectTabBar);
  return (
    <View
      style={[
        styles.container,
        {
          display: visible ? 'flex' : 'none',
          paddingBottom: 20,
        },
      ]}>
      <View style={styles.bar}>
        {routeState.routes.map((route, index) => {
          const isFocused = routeState.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            dispatch(setTabBatStatus(!!index));

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              style={[
                styles.icon,
                {
                  backgroundColor: isFocused ? COLORS.lightBlue : 'transparent',
                },
              ]}>
              <IconNav
                name={route.name}
                color={isFocused ? COLORS.accentActive : COLORS.accent}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default memo(BottomTabBar);
