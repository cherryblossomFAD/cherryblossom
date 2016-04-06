'use strict';
import React, {
  Component,
  Text,
  View,
} from 'react-native';

const styles = require('../../styles.js')

class More extends Component {
  render() {
    return (
      <View style={styles.moreScene}>
      <Text style={styles.moreText}>This is a place holder.</Text>
      </View>
    )
  }
}

module.exports = More
