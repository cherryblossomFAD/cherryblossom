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
  ProgressBarAndroid,
} from 'react-native';

const styles = require('./styles.js')
const FakeDestinationsList = require('./src/components/FakeDestinationsList')
const DRAWER_REF = 'drawer';

class cherryblossom extends Component {
  render() {
    const navigationView = (
          <View style={{flex: 1, backgroundColor: '#88D8EC'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Drawer Item</Text>
          </View>
        );

    return (
      <DrawerLayoutAndroid
            drawerWidth={300}
            ref={DRAWER_REF}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View>
              <ToolbarAndroid
                navIcon={ require('./hamburger.png')}
                onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
                title="Destinations"
                style={styles.toolBar}
                />
              <FakeDestinationsList />
            </View>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('cherryblossom', () => cherryblossom);
