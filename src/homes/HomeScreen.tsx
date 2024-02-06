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
import {
  Element3,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../components/TagComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element3 size={30} color={colors.desc} />
          <Notification size={30} color={colors.desc} />
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
          <TextComponent color="#696B6F" text="Search task" />
          <SearchNormal1 size={25} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 task done" />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="Match 22"
                  onPress={() => console.log('Hell')}
                />
              </RowComponent>
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
