import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 17,
  },
  icon: {
    padding: 10,
    borderRadius: 25,
  },
});
