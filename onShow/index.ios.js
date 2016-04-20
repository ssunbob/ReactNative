/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  PixelRatio,//屏幕比特率
  NavigatorIOS
} from 'react-native';

import styles from './app/Styles/Main';

import Home from './app/Components/Home';

class onShow extends Component {
  render() {
    return (
      <NavigatorIOS
				style={styles.container}
				initialRoute={{
					title:'主页',
					component:Home
				}}
				shadowHidden={true}
				barTintColor="rgba(228,79,80,0.8)"
				titleTextColor="rgba(255,255,255,0.8)"
				tintColor="rgba(255,255,255,0.8)"
				translucent={true}
			/>

    );
  }
}

AppRegistry.registerComponent('onShow', () => onShow);
