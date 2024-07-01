import {SCREENS} from './enums.ts';
import {ParamListBase} from '@react-navigation/native';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.MAP]: undefined;
  [SCREENS.INFO]: undefined;
} & ParamListBase;
