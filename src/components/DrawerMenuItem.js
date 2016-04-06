'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

const Icon	= require('react-native-vector-icons/EvilIcons');

class DrawerMenuItem extends Component {

  render() {
    var menuColor = this.props.position == this.props.active ? "#E91E63" : "#737373";
		var menuColorStyle = {
			color: menuColor,
			fontSize: 18,
      fontWeight: 'bold',
      paddingBottom: 10,
		};

    return (
      <TouchableNativeFeedback
				onPress={this._handlePress.bind(this)}
				background={TouchableNativeFeedback.Ripple()} >
				<View style={styles.menuItemWrapper}>
					<View style={styles.menuItemIcon}>
						<Icon name={this.props.icon} size={32} color={menuColor} marginRight={30} style={{paddingBottom: 5}} />
					</View>
					<View style={styles.menuItemtext}>
						<Text style={menuColorStyle}>
							{this.props.title}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
    );
  }

  _handlePress() {
     this.props.onSelect(this.props.position);
  }
}

var styles = StyleSheet.create({
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
    },
});

module.exports = DrawerMenuItem
