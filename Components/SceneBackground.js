import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

let defaultSceneBackgroundColor = 'white'

class SceneBackground extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SceneBackground;
