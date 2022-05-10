import System from '@smartface/native/device/system';
import type appAndroid from './app-Android';
import type appIOS from './app-iOS';

const App: typeof appAndroid & typeof appIOS = require(`./app-${System.OS}`);

export default App;
module.exports = App;
