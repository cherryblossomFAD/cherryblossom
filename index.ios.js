'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TabBarIOS,
  TouchableHighlight
} from 'react-native';

const DestinationsNavigator = require('./src/components/DestinationsNavigator')
const EntypoIcon	= require('react-native-vector-icons/Entypo');
const SearchNavigator = require('./src/components/SearchNavigator')
const MoreNavigator = require('./src/components/MoreNavigator')
const styles = require('./styles.js')

class CherryBlossom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'destinationsTab',
    };
  }

  render() {
    return (
      <View style={styles.nav}>
      <StatusBar
        barStyle="light-content"
        />
    <TabBarIOS
        tintColor="#E91E63"
        barTintColor="#101010">
        <EntypoIcon.TabBarItemIOS
          title="Destinations"
          iconName="location-pin"
          selected={this.state.selectedTab === 'destinationsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'destinationsTab'
            });
          }}>
          <DestinationsNavigator />
        </EntypoIcon.TabBarItemIOS>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'searchTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'searchTab'
            });
          }}>
          <SearchNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'moreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'moreTab',
            });
          }}>
          <MoreNavigator />
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('cherryblossom', () => CherryBlossom);
