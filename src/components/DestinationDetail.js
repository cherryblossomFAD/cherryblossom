'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('../../styles.js')
const destinationAddress = 'The Address'
var DestinationDetail = React.createClass({
  getInitialState() {
    return null
  },

  render() {
  //  alert(destinationAddress)
    return (
      <View>
        <Text style={styles.text}> {destinationAddress} </Text>
      </View>
  )
  }
});

module.exports = DestinationDetail
