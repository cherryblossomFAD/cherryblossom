import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Destination = require('./Destination')

const MOCKED_DESTINATIONS_DATA = [
  {title: 'Destination 1', address: 'Address 1', geographicCoordinates: {latitude: 1.0, longitude: 1.0}},
  {title: 'Destination 2', address: 'Address 2', geographicCoordinates: {latitude: 2.0, longitude: 2.0}},
];

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource.cloneWithRows(MOCKED_DESTINATIONS_DATA)}
          renderRow={this.renderDestination}
          style={styles.listView}
      />
    );
  }

  renderDestination(rowData) {
    return (
      <Destination
          title={rowData.title}
          address={rowData.address}
          geographicCoordinates={rowData.geographicCoordinates}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
  },

  text: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },

  listView: {
    backgroundColor: '#0f0f0f',
  },
});

module.exports = Destinations
