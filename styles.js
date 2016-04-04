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

  container: {
    flex: 1,
  },

  text: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4
  },

  map: {
    flex: 2,
  },

  textInput: {
    borderRadius: 4,
    padding: 4,
    margin: 4,
    height: 40,
    backgroundColor: '#3f3f3f',
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white'
  },
});

module.exports = styles
