import { AppRegistry } from 'react-native';
import Main from './src/components/main';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Main);
