import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MainList from './Components/MainList/main-list';
import ViewItem from './Components/ViewItem/view-item';

const Navigator = StackNavigator({
  Home: { screen: MainList },
  ViewItem: { screen: ViewItem },
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MainList />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
