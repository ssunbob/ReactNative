'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import styles from '../Styles/Main';

var DEFAULT_URL = 'http://500108.m.weimob.com/vshop/index';

class act2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: DEFAULT_URL,
    };
  }

  render() {
    return (
        <View style={{flex:1}}>
          <WebView source={{uri: this.state.url}} style={styles.container} startInLoadingState={true} javaScriptEnabled={true} domStorageEnabled={true}>
          </WebView>
        </View>
    );
  }
}

export {act2 as default};
