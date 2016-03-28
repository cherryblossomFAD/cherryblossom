'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Swipeout from 'react-native-swipeout';

const Destination = require('./Destination')
const styles = require('../styles.js')
const Firebase = require('firebase');
const FirebaseUrl = 'https://cherryblossoms.firebaseio.com/';

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this.itemsRef = new Firebase(FirebaseUrl);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items = child.val()
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderDestination}
          style={styles.listView}
      />
    );
  }

  renderDestination(rowData) {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red'
    }];

    return (

      <Swipeout right={swipeBtns}
        autoClose='true'
        backgroundColor= 'transparent'>
        <TouchableHighlight>
          <View>
          <Destination
              title={rowData.title}
              address={rowData.address}
          />
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
}

module.exports = Destinations
