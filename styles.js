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
    flex: 1,
    backgroundColor: '#0f0f0f',
    borderBottomColor: 'white',
    borderBottomWidth: 1
   },

  destinations: {
    flex: 1,
    paddingTop: 40
  },

  tabContent: {
    flex: 1,
    alignItems: 'center',
  },

  tabText: {
    color: 'white',
    margin: 50,
  },

  toolBar: {
    height: 60,
    backgroundColor: 'gray',
  },

  listView: {
    backgroundColor: '#0f0f0f',
    paddingTop: 40,
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

  destinationDetail: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    paddingTop: 100,
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

  map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: 400,
},
});

module.exports = styles
