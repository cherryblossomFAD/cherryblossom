'use strict';
import React, {
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

const styles = require('../../styles.js')
const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          underlayColor='transparent'
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
      <Text style={styles.navBarTitle}>
        {route.name}
      </Text>
    );
  }
}


module.exports = (
  <Navigator.NavigationBar
    style={styles.nav}
    routeMapper={NavigationBarRouteMapper} />
);
