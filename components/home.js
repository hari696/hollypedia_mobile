import React, { Component } from 'react';
import logo from '../assets/images/logo.jpg';
import { Platform, StyleSheet ,View, Text, Image } from 'react-native';
import SearchMovie from './search_movie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 50,
    color: '#696969',
    fontFamily: 'Courier',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: 'Courier',
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    alignItems: 'center',
    height: 50
  }
});

export default class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={logo} style={{width: 200, height: 185}} />
            <Text style={styles.welcome}>HollyPedia</Text>
            <Text style={styles.instructions}>
              Enjoy and Grow your HollyWood knowledge
            </Text>
          </View>
            <View>
              <SearchMovie />
            </View>
      </View>
    );
  }
}
