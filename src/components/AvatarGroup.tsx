import {View, Text} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {Image} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

const AvatarGroup = () => {
  const uidsLength = 100;
  const imageUrl =
    'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww';
  const imageStyle = {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.white,
  };
  return (
    <RowComponent>
      {Array.from({length: uidsLength}).map(
        (item, index) =>
          index < 3 && (
            <Image
              source={{uri: imageUrl}}
              key={`image${index}`}
              style={[imageStyle, {marginLeft: index > 0 ? -10 : 0}]}
            />
          ),
      )}
      {uidsLength > 5 && (
        <View
          style={[
            imageStyle,
            {
              backgroundColor: 'coral',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              marginLeft: -10,
            },
          ]}>
          <TextComponent
            flex={0}
            styles={{
              lineHeight: 19,
            }}
            size={12}
            font={fontFamilies.semiBold}
            text={`+${uidsLength - 3 > 9 ? 9 : uidsLength - 3}`}
          />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroup;
