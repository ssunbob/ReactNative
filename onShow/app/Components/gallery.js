'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  WebView,
  Text,
  Image,
} from 'react-native';

import styles from '../Styles/Main';

var DEFAULT_URL = 'http://weibo.com/vczero';

class gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:DEFAULT_URL,
    };
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.grid}>
      <Text style={styles.welcome}>
        Welcome to {this.props.title}!
      </Text>
      <WebView source={{uri: this.state.url}}>
      </WebView>

      </View>

      </ScrollView>
    );
  }
}

export {gallery as default};
