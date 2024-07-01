import React from 'react';
import {View} from 'react-native';
import {SCREENS} from '../../types/enums.ts';
import HomeIcon from '../../assets/icons/home-icon.tsx';
import MapIcon from '../../assets/icons/map-icon.tsx';
import InfoIcon from '../../assets/icons/info-icon.tsx';
import {COLORS} from '../../styles/colors.ts';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const IconNav: React.FC<IconProps> = ({
  name,
  size = 30,
  color = COLORS.accent,
}: IconProps) => {
  if (name === SCREENS.HOME) {
    return <HomeIcon color={color} size={size} />;
  } else if (name === SCREENS.MAP) {
    return <MapIcon color={color} size={size} />;
  } else if (name === SCREENS.INFO) {
    return <InfoIcon color={color} size={size} />;
  } else {
    return <View style={{width: size, height: size, backgroundColor: color}} />;
  }
};

export default IconNav;
