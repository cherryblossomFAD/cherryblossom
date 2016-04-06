'use strict';
import React, {
  Component,
  Navigator,
} from 'react-native';

const styles = require('../../styles.js')
const NavBar = require('./NavBar')
const Search = require('./Search')

class SearchNavigator extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <Navigator
        tintColor="white"
        titleTextColor="white"
        barTintColor="#101010"
        style={{ flex: 1 }}
        initialRoute={ { name: 'Search', component: Search } }
        renderScene={ this.renderScene.bind(this) }
        navigationBar={NavBar} />
      )
    }
}

module.exports = SearchNavigator
