import React from 'react';
import {Text} from 'react-native';
import {TITLE} from '../../styles/text.ts';
import {styles} from './styles.ts';

interface TitleProps {
  text: string;
  align?: 'left' | 'center' | 'right';
}

const Header: React.FC<TitleProps> = ({text, align = 'left', ...props}) => {
  return (
    <Text style={[TITLE.h1, styles.title, {textAlign: align}]} {...props}>
      {text}
    </Text>
  );
};

export default Header;
