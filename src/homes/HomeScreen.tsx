import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {globalStyles} from '../styles/globalStyles';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Hello" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hello, KHA" />
        <TitleComponent text="Be productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Safe')}>
          <TextComponent text="Search" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 task done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="Circle" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
