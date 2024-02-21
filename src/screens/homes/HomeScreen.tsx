import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

import {globalStyles} from '../../styles/globalStyles';
import Container from '../../components/Container';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import {fontFamilies} from '../../constants/fontFamilies';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import CardComponent from '../../components/CardComponent';
import {
  Add,
  Edit2,
  Element3,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import TagComponent from '../../components/TagComponent';

import CircularComponent from '../../components/CircularComponent';
import SpaceComponent from '../../components/SpaceComponent';
import CardImageComponent from '../../components/CardImageComponent';
import AvatarGroup from '../../components/AvatarGroup';
import ProgressBarComponent from '../../components/ProgressBarComponent';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
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
            onPress={() => navigation.navigave()}>
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
                <CircularComponent value={40} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task manager mobile app" size={13} />
                <View style={{marginVertical: 28}}>
                  <AvatarGroup />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2023 - 12"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{flex: 1}}>
              <CardImageComponent color="rgba(33,150,243,0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" />
                <AvatarGroup />
                <ProgressBarComponent percent="40%" color="#A2F068" />
              </CardImageComponent>

              <SpaceComponent height={16} />
              <CardImageComponent color="rgba(18,181,22,0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={13} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TextComponent
            text="Urgent tasks"
            flex={1}
            font={fontFamilies.bold}
            size={21}
          />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigave('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.blue,
              padding: 10,
              borderRadius: 100,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" flex={0} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
