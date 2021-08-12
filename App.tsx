/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  SafeAreaView,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  StyleProp,
  TextStyle,
  FlatList,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

interface ListItem {
  id: string,
  title: string,
  onPress: () => void,
};

const commonStyle: StyleProp<ViewStyle> = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle: StyleProp<ViewStyle> = {
  width: '100%',
  height: 48,
  backgroundColor: 'white'
};

const textStyle: StyleProp<TextStyle> = {
  color: 'black'
};

const alertOnPress = (title: string, message: string) =>
  Alert.alert(title, message)

const generateListItems = (prefix: string, lim: number = 100): ListItem[] => {
  const items: ListItem[] = [];

  for(let i = 0; i < lim; i++) {
    items.push({
      id: `${i}`,
      title: `${prefix} list item ${i}`,
      // onPress: () => console.log(`Tapped item ${i} in ${prefix}`),
      onPress: () => alertOnPress(`Title ${i}`, `Alert message for item ${i}`)
    });
  }

  return items;
};

const Item = ({ title, onPress }: ListItem): JSX.Element => (
  <TouchableOpacity
    onPress={onPress} accessible={false}
    style={buttonStyle}
  >
    <Text style={textStyle}>
      {title}
    </Text>
  </TouchableOpacity>
);

const renderItem = ({ item }: { item: ListItem }): JSX.Element =>
  <Item {...item} />

const rootTabItems: ListItem[] = generateListItems(`Root`);
const leftTabItems: ListItem[] = generateListItems(`Left`, 50);
const rightTabItems: ListItem[] = generateListItems(`Right`, 200);

const RootTab = (): JSX.Element => (
  <View style={{ ...commonStyle, backgroundColor: 'red' }}>
    <FlatList
      data={rootTabItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);

const LeftTab = (): JSX.Element => (
  <View style={{ ...commonStyle, backgroundColor: 'green' }}>
     <FlatList
      data={leftTabItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);


const RightTab = (): JSX.Element => (
  <View style={{ ...commonStyle, backgroundColor: 'blue' }}>
     <FlatList
      data={rightTabItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  left: LeftTab,
  root: RootTab,
  right: RightTab,
});

const App = (): JSX.Element => {
  const layout = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const [index, setIndex] = useState<number>(1);
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  const [routes] = useState<{ key: string, title: string }[]>([
    { key: 'left', title: 'Left tab' },
    { key: 'root', title: 'Root tab' },
    { key: 'right', title: 'Right tab' },
  ])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default App;
