'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const DrawerMenuItem = require('./DrawerMenuItem')

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenIndex: 0
    };
  }

  render() {
    // Render menu items
		var items = this.props.menuItems.map(function (item) {
					return <DrawerMenuItem
								title={item.title}
								position={item.position}
								icon={item.icon}
								key={item.position}
								active={this.state.screenIndex}
								onSelect={this._handlePress.bind(this)} />
				}.bind(this));

    return (
      <View style={styles.container}>
				<View style={styles.drawerHeader}>
					<Text style={styles.appTitle}>CherryBlossom</Text>
				</View>
				{items}
			</View>
    );
  }

  _handlePress(position) {
    this.setState({
     screenIndex: position
   });

   this.props.onSelect(position, 'replace');
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929'
    },
    drawerHeader: {
        backgroundColor: '#E91E63',
        height: 62,
        marginBottom: 19,
        borderBottomColor: '#8A264D',
        borderBottomWidth: 2,
    },
    menuItemWrapper: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center'
    },
    menuItemIcon: {
        marginRight: 32
    },
    menuItemtext: {
        flex: 2,
        backgroundColor: 'blue',
        fontSize: 14
    },
    appTitle: {
    	fontSize: 20,
    	marginLeft: 16,
    	marginTop: 15,
      color: 'white',
    }
});

module.exports = DrawerMenu
