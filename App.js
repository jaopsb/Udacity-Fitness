import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}