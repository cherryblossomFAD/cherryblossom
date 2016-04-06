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
  Alert,
} from 'react-native';

const styles = require('../../styles.js')
const Firebase = require('firebase');
const FirebaseUrl = 'https://cherryblossoms.firebaseio.com/';
const removeAlertMessage = "This destination has been removed"
var MapView = require('react-native-maps');

var DestinationDetail = React.createClass({

  getInitialState() {
    this.destinationRef = new Firebase(FirebaseUrl + this.props.route.passprops.key);
    return {
      title: '',
      address: '',
      rating: '',
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
      const region = {
        latitude: snap.val().location.lat,
        longitude: snap.val().location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
      this.setState({title: snap.val().title, address: snap.val().address, rating: snap.val().rating, region: region})
    } else {
      Alert.alert(
           'Destination removed',
           removeAlertMessage,
           [{text: 'OK', onPress: () => this.props.navigator.pop()}]
         )
    }
  },

  onSubmitChange() {
    this.destinationRef.child('title').set(this.state.title)
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
      <View style={[{height: this.state.visibleHeight}, styles.scene]}>
        <MapView
          style={styles.map}
          region = {this.state.region}
          >
          <MapView.Marker
            coordinate={{latitude: this.state.region.latitude,
              longitude: this.state.region.longitude}}
          />
        </MapView>
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
          <Text style={styles.text}>
            Rating:  {this.state.rating}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = DestinationDetail
