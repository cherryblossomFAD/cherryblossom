'use strict';
import React, {
  Component,
  Text,
  View,
} from 'react-native';

const styles = require('../../styles.js')

class Destination extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>
            {this.props.title}
          </Text>
          <Text style={styles.text}>
            {this.props.address}
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Destination
