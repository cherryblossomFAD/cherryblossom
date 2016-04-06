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
const styles = require('./styles.js')

class CherryBlossom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'destinationsTab',
    };
  }

  _renderContent(pageText: string) {
      return (
        <View style={[styles.tabContent, {backgroundColor: '#0f0f0f'}]}>
          <Text style={styles.tabText}>{pageText}</Text>
        </View>
      );
    }

  render() {
    return (
      <View style={styles.nav}>
      <StatusBar
        barStyle="light-content"
        />
    <TabBarIOS
        tintColor="white"
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
          {this._renderContent('More')}
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('cherryblossom', () => CherryBlossom);
