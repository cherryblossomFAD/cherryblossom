'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

const styles = require('../../styles.js')

class Search extends Component {
  render() {
    return (
      <View style={styles.search}>
        <TouchableHighlight onPress={this.addDestination} underlayColor="transparent">
          <Text style={styles.button}>Add Destination</Text>
        </TouchableHighlight>
      </View>
    )
  }

  addDestination() {
    AlertIOS.prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      'plain-text', 'secure-text', 'another one'
    );
  }
}

module.exports = Search
