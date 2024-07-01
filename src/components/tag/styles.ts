import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors.ts';

export const styles = StyleSheet.create({
  tag: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: COLORS.accent,
  },
  text: {
    color: COLORS.white,
  },
});
