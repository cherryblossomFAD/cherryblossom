'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = require('../../styles.js')

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      address: this.props.address,
      id: this.props.id
    };
  }

  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>
            {this.state.title}
          </Text>
          <Text style={styles.text}>
            {this.state.address}
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Destination
