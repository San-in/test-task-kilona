import {COLORS} from './colors';
import {StyleSheet} from 'react-native';

export const TEXT_COLOR = {
  white: {
    color: COLORS.white,
  },
  black: {
    color: COLORS.black,
  },
  accent: {
    color: COLORS.accent,
  },
};

export const TITLE = StyleSheet.create({
  h1: {
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 32.55,
  },
  h2: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 37.5,
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
  },
});

export const TEXT = StyleSheet.create({
  xSmall: {
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 13.5,
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  normal: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  large: {
    fontSize: 19,
    fontWeight: '400',
    lineHeight: 28.5,
  },
});
