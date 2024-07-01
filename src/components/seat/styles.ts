import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';

export const styles = StyleSheet.create({
  seat: {
    flex: 1,
    minWidth: 47,
    minHeight: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  available: {
    backgroundColor: COLORS.white,
  },
  reserved: {
    backgroundColor: COLORS.secondary,
  },
});
