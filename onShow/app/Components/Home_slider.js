'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import act1 from '../Components/act1';
import act2 from '../Components/act2';
import act3 from '../Components/act3';
//import Carousel from 'react-native-carousel';
import Swiper from 'react-native-swiper';

import styles from '../Styles/Main';

class Home_slider extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  pagePush(component,title){
    this.props.navigator.push({
      title:title,
      component:component,
      passProps:{title}
    });
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} height={250} autoplay={true}>
         <TouchableHighlight
           underlayColor="rgba(34,26,38,0.1)"
           style={styles.slider_container}
           onPress={() => this.pagePush(act1,'活动页1')}
         >
          <Image style={styles.slider_image} source={require('./../Assets/book.jpg')} resizeMode={Image.resizeMode.contain}/>
        </TouchableHighlight>
         <TouchableHighlight
           underlayColor="rgba(34,26,38,0.1)"
           style={styles.slider_container}
           onPress={() => this.pagePush(act2,'活动页2')}
         >
         <Image style={styles.slider_image} source={require('./../Assets/movie.jpg')} resizeMode={Image.resizeMode.contain}/>
         </TouchableHighlight>

         <TouchableHighlight
           underlayColor="rgba(34,26,38,0.1)"
           style={styles.slider_container}
           onPress={() => this.pagePush(act3,'活动页3')}
         >
         <Image style={styles.slider_image} source={require('./../Assets/music.jpg')} resizeMode={Image.resizeMode.contain}/>
         </TouchableHighlight>

       </Swiper>
    );
  }
}

export {Home_slider as default};
