'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
} from 'react-native';

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

const Firebase = require('firebase');
const FirebaseUrl = 'https://cherryblossoms.firebaseio.com/';
const styles = require('../../styles.js')

var Search = React.createClass({
  getInitialState() {
    this.itemsRef = new Firebase(FirebaseUrl)
    return null
  },

  getRatings(destinationRating) {
    if (destinationRating == null) {
      return "no ratings"
    }
    return (destinationRating + " / 5")
  },

  getOpeningHours(destinatinOpeningHours) {
    if (destinatinOpeningHours == null ||
      destinatinOpeningHours.weekday_text == null) {
      return []
    }
    return destinatinOpeningHours.weekday_text
  },

  render() {
    return (
      <View style={styles.searchScene}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
          const destination = {
            title: details.name,
            address: details.formatted_address,
            location: details.geometry.location,
            rating: this.getRatings(details.rating),
            openingHours: this.getOpeningHours(details.opening_hours)
          }
          this.itemsRef.push(destination)

          const destinationAddedMessage = "\"" + destination.title + "\" was added to your Desinations."
          Alert.alert(
               'Destination added',
               destinationAddedMessage)
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyCt38aARR3ZX1iedL8fchnkTa2Fa0yjiZk',
          language: 'en', // language of the results
        }}
        styles={{
          description: styles.text,
          row: {
            height: (Platform.OS === 'ios') ? 60 : 45
          },
          predefinedPlacesDescription: {
            fontWeight: 'bold',
            color: '#1faadb',
          },
          container: {
            paddingTop: 20,
            backgroundColor: '#0f0f0f'
          },
          separator: {
            height: 1,
            backgroundColor: '#4c4c4c'
          }

        }}

        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current Location"
        currentLocationAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
      />
      </View>
    );
  }
});

module.exports = Search
