import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      address: this.props.address,
      geographicCoordinates: this.props.geographicCoordinates,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>
            {this.state.title}
          </Text>
          <Text style={styles.text}>
            {this.state.address}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>
            ({this.state.geographicCoordinates.latitude},{this.state.geographicCoordinates.longitude})
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },

  leftContainer: {
    flex: 1,
  },

  rightContainer: {
    paddingRight: 10,
  },

  text: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

module.exports = Destination
