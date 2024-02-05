import {View, Text} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
}
const TitleComponent = (props: Props) => {
  const {text, size, font, color} = props;
  return (
    <TextComponent
      size={size ?? 18}
      font={font ?? fontFamilies.semiBold}
      color={color}
      text={text}
    />
  );
};

export default TitleComponent;
