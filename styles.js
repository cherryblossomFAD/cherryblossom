'use strict';
const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
  search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f'
  },

  nav: {
      flex: 1
   },

  destinations: {
    flex: 1,
    paddingTop: 64
  },

  tabContent: {
    flex: 1,
    alignItems: 'center',
  },

  tabText: {
    color: 'white',
    margin: 50,
  },

  listView: {
    backgroundColor: '#0f0f0f',
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },

  leftContainer: {
    flex: 1,
  },

  rightContainer: {
    paddingRight: 10,
  },

  text: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },

  button: {
    color: 'cyan',
  }
});

module.exports = styles
