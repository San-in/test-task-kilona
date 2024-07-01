import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 10.15,
    elevation: 5,
  },
  cardHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 8,
    paddingHorizontal: 10,
    gap: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: COLORS.accent,
  },
  text: {
    color: COLORS.white,
  },
});
