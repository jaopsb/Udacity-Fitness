import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import { Constants } from 'expo'


class FlexboxExamples extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'green' }} />
        <View style={{ flex: 3, backgroundColor: 'blue' }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  box: {
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;