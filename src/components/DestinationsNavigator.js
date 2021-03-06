'use strict';
import React, {
  Component,
  Navigator
} from 'react-native';

const NavBar = require('./NavBar')
const Destinations = require('./Destinations')

class DestinationsNavigator extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <Navigator
        tintColor="white"
        titleTextColor="white"
        barTintColor="#101010"
        initialRoute={ { name: 'Destinations', component: Destinations } }
        renderScene={ this.renderScene.bind(this) }
        navigationBar={NavBar} />
    )
  }
}

module.exports = DestinationsNavigator
