import '~/config/ReactotronConfig'
import '~/config/StatusBarConfig'

import { AppRegistry } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
