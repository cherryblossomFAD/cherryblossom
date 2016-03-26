import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
          dataSource={this.state.dataSource.cloneWithRows(['destination1', 'destination2'])}
          renderRow={this.renderDestination}
          style={styles.listView}
      />
    );
  }

  renderDestination(rowData) {
    return (
      <View style={[styles.container, styles.rowItem]}>
        <Text style={styles.text}>
          {rowData}
        </Text>
      </View>
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

  rowItem: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  }
});

module.exports = Destinations
