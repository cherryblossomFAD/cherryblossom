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
const Destinations = require('./Destinations')

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          onPress={() => {
              navigator.pop();
          }}>
          <Text style={styles.text}>Back</Text>
        </TouchableHighlight>
      )
    }
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={styles.text}>
        {route.name}
      </Text>
    );
  }
}

class DestinationsNavigator extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Destination', component: Destinations }}
        tintColor="white"
        titleTextColor="white"
        barTintColor="#101010"
        renderScene = { this.renderScene.bind(this) }
        navigationBar={
        <Navigator.NavigationBar
          style={styles.nav}
          routeMapper={NavigationBarRouteMapper}
        />}
        />
    )
  }
}

module.exports = DestinationsNavigator
