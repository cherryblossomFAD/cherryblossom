'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  DeviceEventEmitter,
  Dimensions,
} from 'react-native';

const styles = require('../../styles.js')
const Firebase = require('firebase');
const FirebaseUrl = 'https://cherryblossoms.firebaseio.com/';
var MapView = require('react-native-maps');

var DestinationDetail = React.createClass({

  getInitialState() {
    this.destinationRef = new Firebase(FirebaseUrl + this.props.route.passprops.key);
    return {
      title: '',
      address: '',
      annotations: [],
      region: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      visibleHeight: Dimensions.get('window').height,
    };
  },

  componentWillMount () {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow)
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide)
  },

  componentDidMount() {
    this.destinationRef.on('value', this.onValueChange)
  },

  componentWillUnmount() {
    this.destinationRef.off('value')
    DeviceEventEmitter.removeAllListeners()
  },

  onValueChange(snap) {
    if (snap.val() != null) {
      const annotation = [{
        longitude: snap.val().location.lng,
        latitude: snap.val().location.lat,
      }]

      const region = {
        latitude: snap.val().location.lat,
        longitude: snap.val().location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
      this.setState({title: snap.val().title, address: snap.val().address, annotations: annotation, region: region})
    } else {
      this.props.navigator.pop()
    }
  },

  onSubmitChange() {
    this.destinationRef.set({
      title: this.state.title,
      address: this.state.address,
      location: {
        lat: this.state.region.latitude,
        lng: this.state.region.longitude,
      },
    })
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
          region = {this.state.region}
        />
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({title: text})}
            onSubmitEditing={this.onSubmitChange}
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
