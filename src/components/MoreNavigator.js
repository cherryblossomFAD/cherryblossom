'use strict';
import React, {
  Component,
  Navigator
} from 'react-native';

const NavBar = require('./NavBar')
const More = require('./More')

class MoreNavigator extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} name={route.name} route={route} />
  }

  render() {
    return (
      <Navigator
        tintColor="white"
        titleTextColor="white"
        barTintColor="#101010"
        initialRoute={ { name: 'More', component: More } }
        renderScene={ this.renderScene.bind(this) }
        navigationBar={NavBar} />
    )
  }
}

module.exports = MoreNavigator
