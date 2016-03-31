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
    destinationAddress = "Whatever the address is"
    return null
  },

  render() {
    return (
    <Text> {destinationAddress} </Text>
  )
  }
});

module.exports = DestinationDetail
