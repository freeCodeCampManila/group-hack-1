import React, { Component } from 'react';

import { View, Text  } from 'react-native';

export default class ViewItem extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });

  render() {
    const { title } = this.props.navigation.state.params;

    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}
