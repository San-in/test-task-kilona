import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';

export const styles = StyleSheet.create({
  infoHeader: {
    gap: 53,
  },
  legend: {
    alignItems: 'center',
    gap: 5,
  },
  legendValue: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  legendMarker: {
    width: 23,
    aspectRatio: 1,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  reserved: {
    backgroundColor: COLORS.secondary,
  },
  scrollContainer: {
    paddingHorizontal: 35,
    marginTop: 79,
  },
  seatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 45,
  },
  seatsLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  seatsRow: {
    gap: 19,
  },
});
