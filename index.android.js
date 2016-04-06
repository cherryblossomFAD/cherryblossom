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
  ToolbarAndroid,
  DrawerLayoutAndroid,
  Navigator,
} from 'react-native';

const styles = require('./styles.js')
const Destinations = require('./src/components/Destinations')
const DestinationDetail = require('./src/components/DestinationDetail')
const Search = require('./src/components/Search')
const DrawerMenu = require('./src/components/DrawerMenu')
const Icon	= require('react-native-vector-icons/EvilIcons');
const Ionicons = require('react-native-vector-icons/Ionicons');

const DRAWER_REF = 'drawer'
const NAV_REF = 'navigator'
const MENU_ITEMS = [{
    'title': 'Destinations',
    'icon': 'location',
    'position': 0
}, {
    'title': 'Search',
    'icon': 'search',
    'position': 1
}];

class cherryblossom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: MENU_ITEMS[0].title,
      position: 0
    };
  }

  render() {
    const navigationView = (
          <DrawerMenu
              menuItems={MENU_ITEMS}
              onSelect={this._showNewScreen.bind(this)}
          />
        );

    return (
      <DrawerLayoutAndroid
            drawerWidth={300}
            ref={DRAWER_REF}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <Navigator
                    ref={NAV_REF}
                    initialRoute={
                        {
                            id: this.state.position,
                            title: MENU_ITEMS[this.state.position].title
                        }
                    }
                    renderScene= {this._renderScene.bind(this)}
                  />
      </DrawerLayoutAndroid>
    );
  }

  _showNewScreen(position, action) {
    this.refs[DRAWER_REF].closeDrawer();

    switch (action) {
            case 'push':
                this.refs[NAV_REF].push({id: position, title: MENU_ITEMS[position].title});
                return;
            case 'replace':
                this.refs[NAV_REF].replace({id: position, title: MENU_ITEMS[position].title});
                return;
            default:
                this.refs[NAV_REF].push({id: position, title: MENU_ITEMS[position].title});
                return;
        }
  }

  _renderScene(route, navigator) {
    var toolBars = [];
        toolBars.push(
            <Ionicons.ToolbarAndroid
              navIconName="navicon-round"
              onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
              title={route.title}
              style={styles.toolBar}
            />
          );

          toolBars.push(
              <Ionicons.ToolbarAndroid
                navIconName="android-arrow-back"
                onIconClicked={() => {
                                        if (route.id > 0) {
                                            navigator.pop();
                                        }
                                      }
                              }
                title={route.title}
                style={styles.toolBar}
              />
            );

    switch (route.id) {
      case 0:
        return (
            <View style={styles.nav}>
              {toolBars[0]}
              <Destinations navigator={navigator} />
            </View>
          );
      case 1:
        return (
            <View style={styles.nav}>
              {toolBars[0]}
              <Search navigator={navigator} />
            </View>
          );
      case 3:
        return (
          <View style={styles.nav}>
            {toolBars[1]}
            <DestinationDetail navigator={navigator} route={route}/>
          </View>
        )
      default:
        return (
          <View style={styles.nav}>
            {toolBars[0]}
            <Destinations navigator={navigator} />
          </View>
        );
    }

  }


}

AppRegistry.registerComponent('cherryblossom', () => cherryblossom);
