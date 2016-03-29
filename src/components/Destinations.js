'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swipeout from 'react-native-swipeout';

const { bindActionCreators } = require('redux')
const { connect } = require('react-redux')
const ItemsActions = require('../actions/destinationActions')

const Destination = require('./Destination')
const styles = require('../../styles.js')
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
// When a todo is removed
this.itemsRef.on('child_removed', (dataSnapshot) => {
    this.items = this.items.filter((x) => x.id !== dataSnapshot.key());
    this.setState({
      todoSource: this.state.todoSource.cloneWithRows(this.items)
    });
});
  }

  _remove(id) {
    console.log(id)
    this.itemsRef.child(id).remove()
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
        backgroundColor= 'transparent'
        onPress={() => this._remove(rowData.id)}>
          <Destination
              title={rowData.title}
              address={rowData.address}
          />
      </Swipeout>
    );
  }
}

function mapReduxStoreToProps(reduxStore) {
  return {
    destinationItems: reduxStore.items.destinationItems,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch)
}

module.exports = connect(mapReduxStoreToProps, mapDispatchToProps)(Destinations)

