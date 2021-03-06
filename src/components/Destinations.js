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

const Destination = require('./Destination')
const DestinationDetail = require('./DestinationDetail')
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

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', this.onValueChange.bind(this));
  }

  onValueChange(snap) {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
         title: child.val().title,
         address: child.val().address,
         latitude: child.val().location.lat,
         longitude: child.val().location.lng,
         _key: child.key()
       });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
  }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderDestination.bind(this)}
          style={styles.destinationsScene}
      />
    );
  }

  deleteDestination(rowData) {
    this.itemsRef.child(rowData._key).remove()
  }

  navigate(rowData) {
    this.props.navigator.push({
      name: 'Destination Details',
      component: DestinationDetail,
      passprops: {
        key: rowData._key,
      },
      id: 3,
      title: 'Destination Details',
    })
  }

  renderDestination(rowData) {
    return (
        <View style={{paddingTop: 10}}>
          <Destination
              title={rowData.title}
              address={rowData.address}
              id={rowData.id}
              onRemove={() => this.deleteDestination(rowData)}
              onPress={() => this.navigate(rowData)}
          />
          </View>
    );
  }
}

module.exports = Destinations
