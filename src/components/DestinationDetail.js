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
const Firebase = require('firebase');
const FirebaseUrl = 'https://cherryblossoms.firebaseio.com/';

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

  valueRemoved() {
    this.props.navigator.pop()
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

  valueChanged(snap, previousKey) {

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
