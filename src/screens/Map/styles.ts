import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';

export const styles = StyleSheet.create({
  map: {width: '100%', height: '100%'},
  speedometer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  speedometerText: {
    color: COLORS.black,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
