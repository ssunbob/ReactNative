'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import styles from '../Styles/Main';

class devblog extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.grid}>
      <Text style={styles.welcome}>
        Welcome to {this.props.title}!
      </Text>
      </View>

      </ScrollView>
    );
  }
}

export {devblog as default};
