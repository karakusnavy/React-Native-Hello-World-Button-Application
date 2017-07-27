import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry } from 'react-native';

class SampleProject extends Component {

_onPress() {
  Alert.alert('on Press!');
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Hello World" color="#999999" width="100px" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 15,
    padding: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

AppRegistry.registerComponent('SampleProject', () => SampleProject);