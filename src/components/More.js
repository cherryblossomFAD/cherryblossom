'use strict';
import React, {
  Component,
  Text,
  View,
  ScrollView
} from 'react-native';

const styles = require('../../styles.js')

class More extends Component {
  render() {
    return (
      <ScrollView style={styles.moreScene}>

      <Text style={ styles.moreText }>
        About
      </Text>
      <Text style={ styles.moreText }>
        Cherry Blossom is a hackathon project made in April 2016.
      </Text>
      <Text style={ styles.moreText }>
        It demonstrates using Javascript as a universal language to create iOS, Android, and Web applications using React, React Native, and a Firebase backend.
      </Text>
      <Text style={ styles.moreText }>
        With these tools, universal javascript can be leveraged to create native experiences with high code re-use. It also takes advantage of the large library of existing npm packages available for javascript.
      </Text>
      <Text style={ styles.moreText }>
        The project was made by three engineers at BMW Technology Corp. in Chicago.
      </Text>
      <Text style={ styles.moreText }>
        Authors
      </Text>
      <Text style={ styles.moreText }>
        Anthony Colon, Dongyan Zhang, Frances Wilhoite
      </Text>
      </ScrollView>
    )
  }
}

module.exports = More
