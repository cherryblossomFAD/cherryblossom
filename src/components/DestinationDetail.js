'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput,
  DeviceEventEmitter,
  Dimensions,
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
      visibleHeight: Dimensions.get('window').height,
    };
  },

  componentWillMount () {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow)
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide)
  },

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  },

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  },

  render() {
    return (
      <View style={{height: this.state.visibleHeight}}>
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
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}
          />
          <Text style={styles.text}>
            {this.state.address}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = DestinationDetail
