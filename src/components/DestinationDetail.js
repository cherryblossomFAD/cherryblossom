'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('../../styles.js')
var destinationAddress = 'The Address'
var DestinationDetail = React.createClass({

  render() {
    destinationAddress = this.props.route.passprops.address
    return (
      <View style={styles.destinationDetail}>
        <Text style={styles.text}> {destinationAddress} </Text>
      </View>
    )
  }

});

module.exports = DestinationDetail
