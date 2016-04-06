'use strict';
import React, {
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: '#202020',
    borderBottomColor: '#4c4c4c',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: -StyleSheet.hairlineWidth
  },

   navBarTitle: {
     color: 'white',
     fontWeight: 'bold',
     paddingTop: 10
   },

   destinationsScene: {
     backgroundColor: '#0f0f0f',
     paddingTop: (Platform.OS === 'ios') ? 44 : 0,
   },

   detailScene: {
     flex: 1,
     paddingTop: (Platform.OS === 'ios') ? 44 : 0,
     paddingBottom: (Platform.OS === 'ios') ? 44 : 0,
     backgroundColor: '#0f0f0f',
   },

   searchScene: {
     flex: 1,
     paddingTop: (Platform.OS === 'ios') ? 44 : -20,
     paddingBottom: (Platform.OS === 'ios') ? 44 : 0,
     backgroundColor: '#0f0f0f',
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
    backgroundColor: '#292929',
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#0f0f0f',
    borderBottomColor: '#4c4c4c',
    borderBottomWidth: 0.5,
    paddingLeft: 8,
  },

  container: {
    flex: 1,
  },

  leftContainer: {
    flex: 0.1,
  },

  text: {
    color: '#BFCBDD',
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4
  },

  detailText: {
    color: '#BFCBDD',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },

  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AFC8EA',
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4
  },

  map: {
    flex: 1,
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
