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
const DRAWER_REF = 'drawer'
const NAV_REF = 'navigator'
const MENU_ITEMS = [{
    'title': 'Destinations',
    'icon': 'mobile',
    'position': 0
}, {
    'title': 'Search',
    'icon': 'info',
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
            <ToolbarAndroid
              navIcon={ require('./hamburger.png')}
              onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
              title={route.title}
              style={styles.toolBar}
            />
          );

          toolBars.push(
              <ToolbarAndroid
                navIcon={ require('./hamburger.png')}
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
            <View>
              {toolBars[0]}
              <Destinations navigator={navigator} />
            </View>
          );
      case 1:
        return (
            <View>
              {toolBars[0]}
              <Search navigator={navigator} />
            </View>
          );
      case 3:
        return (
          <View>
            {toolBars[1]}
            <DestinationDetail navigator={navigator} route={route}/>
          </View>
        )
      default:
        return (
          <View>
            {toolBars[0]}
            <Destinations navigator={navigator} />
          </View>
        );
    }

  }


}

AppRegistry.registerComponent('cherryblossom', () => cherryblossom);
