/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ProgressBarAndroid,
} from 'react-native';

const FakeDestinationsList = require('./src/components/FakeDestinationsList')

class cherryblossom extends Component {
  render() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View>
        <FakeDestinationsList />
      </View>
    </DrawerLayoutAndroid>
  );
  }
}

AppRegistry.registerComponent('cherryblossom', () => cherryblossom);
