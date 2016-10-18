import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class InfoHeaderBar extends Component {
  render() {
    return (
      <View style={styles.InfoHeaderBar}>
        <View style={{
          flex:1,
          flexDirection: 'row',
          backgroundColor: 'purple',
          alignItems: 'center'
        }}>
          <Text style={{
            fontFamily: 'Supercell-Magic',
            color: 'white'
          }}>139</Text>
          <Text style={{
            fontFamily: 'Supercell-Magic',
            color: 'white'
          }}>angryNeeson123</Text>
        </View>
        <View style={{
          flex:1.5,
          backgroundColor: 'aqua'
        }} />
      </View>
    )
  }
}

export default InfoHeaderBar;

const styles=StyleSheet.create({
  InfoHeaderBar: {
    flexDirection: 'column',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    height: 100,
    backgroundColor: 'blue'
  }
});
