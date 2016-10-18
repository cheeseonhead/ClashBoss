import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import SceneBackground from '../Components/SceneBackground';
import InfoHeaderBar from '../Components/InfoHeaderBar';

class MainInfoScene extends Component {
  render() {
    return (
      <SceneBackground style={{
        backgroundColor: 'pink'
      }}>
        <InfoHeaderBar />
      </SceneBackground>
    )
  }
}

export default MainInfoScene;
