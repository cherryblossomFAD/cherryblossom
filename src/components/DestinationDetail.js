'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

const styles = require('../../styles.js')

var DestinationDetail = React.createClass({

  getInitialState() {
    return {
      isFirstLoad: true,
      annotations: [{
        longitude: this.props.route.passprops.longitude,
        latitude: this.props.route.passprops.latitude,
        title: this.props.route.passprops.title,
      }],
    };
  },

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          region = {{
            latitude: this.props.route.passprops.latitude,
            longitude: this.props.route.passprops.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          annotations={this.state.annotations}
        />
      </View>
    );
  }
});

module.exports = DestinationDetail
