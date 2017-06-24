import React, { Component } from 'react';

import { FlatList, View, Text, Button } from 'react-native';



// import NewItem from './new-item';
// import ShowItem from './show-item';
// import EditItem from './edit-item';
// import DeleteItem from './delete-item';

export default class MainList extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        { title: 'John Wick' },
        { title: 'Eternal Sunshine of the Spotless Mind' },
        { title: 'Her' },
        { title: 'Inception' },
        { title: 'Godfather' }
      ]
    };
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <FlatList
            data={this.state.items}
            renderItem={({item}) => <Button
              title={item.title}
              onPress={() =>
                navigate('ViewItem', item)
              }
              />}
          />
      </View>
    );
  }
}
