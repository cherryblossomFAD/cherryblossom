'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TabBarIOS,
  Navigator,
  TouchableHighlight
} from 'react-native';

const styles = require('../../styles.js')
const NavBar = require('./NavBar')
const Destinations = require('./Destinations')

class DestinationsNavigator extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <Navigator
      tintColor="white"
      titleTextColor="white"
      barTintColor="#101010"
              initialRoute={ { name: 'Destinations', component: Destinations } }
              renderScene={ this.renderScene.bind(this) }
              navigationBar={NavBar} />
      )
    }
}

module.exports = DestinationsNavigator
