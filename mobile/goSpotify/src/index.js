import React from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'

import Routes from '~/routes'

import store from '~/store'

import Player from '~/pages/Player'

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
)

export default App
