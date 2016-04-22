'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import styles from '../Styles/Main';

var DEFAULT_URL = 'http://172.24.10.176/wordpress/artspace1';

class gallery extends Component {
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

export {gallery as default};
