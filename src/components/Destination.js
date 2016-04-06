'use strict';
import React, {
  Animated,
  PanResponder,
  TouchableHighlight,
  Component,
  Text,
  View,
} from 'react-native';

const styles = require('../../styles.js')
const EvilIcon	= require('react-native-vector-icons/EvilIcons');

class Destination extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scaleY: new Animated.Value(1),
      pan: new Animated.ValueXY()
    }
  }


  _reset() {
    Animated.timing(this.state.pan, {
      toValue: {x: 0, y: 0},
      duration: 250
    }).start()
  }

  _checkForRemoval() {
    this.state.pan.flattenOffset()
    let x = this.state.pan.x._value
    if (Math.abs(x) > 50) {
      this.refs.wrapper.measure((ox, oy, width) => {
        let newX
        if (x > 0) {
          newX = width
        } else {
          newX = -2 * width
        }

        Animated.sequence([
          Animated.timing(this.state.pan, {
            toValue: {x: newX, y: 0},
            duration: 250
          }),
          Animated.timing(this.state.pan, {
            toValue: {x: 0, y: 0},
            duration: 0
          })
        ]).start(() => {
          this.props.onRemove()
        })
      })
    } else {
      this._reset()
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        this.state.pan.setOffset({x: this.state.pan.x._value})
        this.state.pan.setValue({x: 0})
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),

      onPanResponderRelease: () => this._checkForRemoval(),

      onPanResponderTerminate: () => this._checkForRemoval()
    })
  }

  render() {
    const { pan, scaleY } = this.state
    const translateX = pan.x

    const animatedCardStyles = {transform: [{translateX}, {scaleY}]}
    const wrapperStyles = {
      backgroundColor: 'red',
      transform: [{scaleY}]
    }

    return (
      <Animated.View style={wrapperStyles}>
        <View ref="wrapper">
          <Animated.View style={animatedCardStyles} {...this._panResponder.panHandlers}>
          <TouchableHighlight onPress={ this.props.onPress.bind(this) }>
            <View style={styles.listItem}>
              <View style={styles.leftContainer}>
                <EvilIcon name='location' size={24} color={'#6297DC'} style={{paddingTop: 10}}/>
              </View>
              <View style={styles.container}>
                <Text style={styles.titleText}>
                  {this.props.title}
                </Text>
                <Text style={styles.text}>
                  {this.props.address}
                </Text>
              </View>
            </View>
        </TouchableHighlight>
        </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

module.exports = Destination
