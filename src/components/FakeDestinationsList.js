'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Destination = require('./Destination')
const styles = require('../../styles.js')

const MOCKED_DESTINATIONS_DATA = [
  {title: 'Destination 1', address: 'Address 1', geographicCoordinates: {latitude: 1.0, longitude: 1.0}},
  {title: 'Destination 2', address: 'Address 2', geographicCoordinates: {latitude: 2.0, longitude: 2.0}},
];

class FakeDestinationsList extends Component {

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
          renderRow={this.renderDestination.bind(this)}
          style={styles.listView}
      />
    );
  }

  renderDestination(rowData) {
    return (
          <Destination
              title={rowData.title}
              address={rowData.address}
              id={rowData.id}
          />
    );
  }
}

module.exports = FakeDestinationsList
