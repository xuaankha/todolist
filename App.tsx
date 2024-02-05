/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {fontFamilies} from './src/constants/fontFamilies';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fafafa',
          fontSize: 18,
          fontFamily: fontFamilies.regular,
        }}>
        Welcome to my todo list
      </Text>
      <Text style={styles.title}>Todo List</Text>
      <Button title="Click me" onPress={() => {}} />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilies.bold,
    fontSize: 22,
    color: '#fff',
  },
});
