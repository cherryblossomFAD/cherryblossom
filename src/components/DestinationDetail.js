'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput
} from 'react-native';

const styles = require('../../styles.js')

var DestinationDetail = React.createClass({

  getInitialState() {
    return {
      key: this.props.route.passprops.key,
      title: this.props.route.passprops.title,
      address: this.props.route.passprops.address,
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
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}
          />
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({address: text})}
            value={this.state.address}
          />
      </View>
    );
  }
});

module.exports = DestinationDetail
