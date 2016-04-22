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

//import Carousel from 'react-native-carousel';
import Swiper from 'react-native-swiper';

import styles from '../Styles/Main';

class Home_slider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} height={250} autoplay={true}>
         <View style={styles.slider_container}>
           <Text>Hello Swiper</Text>
         </View>
         <View style={styles.slider_container}>
           <Text>Beautiful</Text>
         </View>
         <View style={styles.slider_container}>
           <Text>And simple</Text>
         </View>
       </Swiper>
    );
  }
}

export {Home_slider as default};
