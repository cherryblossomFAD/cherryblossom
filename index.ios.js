
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TabBarIOS,
  Navigator,
  TouchableHighlight
} from 'react-native';

const Destinations = require('./src/components/Destinations')
const DestinationDetail = require('./src/components/DestinationDetail')

const Search = require('./src/components/Search')
const styles = require('./styles.js')
var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          onPress={() => {
              navigator.pop();
          }}>
          <Text style={styles.text}>Back</Text>
        </TouchableHighlight>
      )
    }
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={styles.text}>
        {route.name}
      </Text>
    );
  }
}
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class CherryBlossom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'destinationsTab',
      notifCount: 0,
      presses: 0
    };
  }

  _renderContent(pageText: string) {
      return (
        <View style={[styles.tabContent, {backgroundColor: '#0f0f0f'}]}>
          <Text style={styles.tabText}>{pageText}</Text>
        </View>
      );
    }
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <View style={styles.nav}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
        />
    <TabBarIOS
        tintColor="white"
        barTintColor="#101010">
        <TabBarIOS.Item
          title="Destinations"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'destinationsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'destinationsTab'
            });
          }}>
          <Navigator
            initialRoute={{ name: 'Destinations List', component: Destinations }}
            tintColor="white"
            titleTextColor="white"
            barTintColor="#101010"
            renderScene = { this.renderScene }
            navigationBar={
            <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={NavigationBarRouteMapper}
            />}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'bookmarksTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'bookmarksTab'
            });
          }}>
          {this._renderContent('Bookmarks')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'searchTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'searchTab'
            });
          }}>
          <Search />
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
