'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  PixelRatio,//屏幕比特率
  TouchableHighlight,
} from 'react-native';

import styles from '../Styles/Main';

import gallery from '../Components/gallery';
import devblog from '../Components/devblog';
import exploreList from '../Components/exploreList';
import ourteam from '../Components/ourteam';
import aboutus from '../Components/aboutus';
import shop from '../Components/shop';

import Home_slider from '../Components/Home_slider';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  pagePush(title,component){
    this.props.navigator.push({
      title:title,
      component:component,
      passProps:{title}
    });
  }

  render() {
    return (
      <ScrollView>
      <View>
      <Home_slider />
      </View>
      <View style={styles.grid}>
				<View style={styles.grid_row}>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            style={[styles.grid_item,styles.grid_left]}
            onPress={() => this.pagePush('作品展示',exploreList)}
          >
    					<View style={styles.slider_container}>
                 <Image style={styles.icon} source={require('./../Assets/map.png')} resizeMode={Image.resizeMode.contain}/>
                 <Text style={styles.grid_text}>作品展示</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            style={[styles.grid_item,styles.grid_right]}
            onPress={() => this.pagePush('开发博客',devblog)}
          >
    					<View style={styles.slider_container}>
                 <Image style={styles.icon} source={require('./../Assets/quill.png')} resizeMode={Image.resizeMode.contain}/>
                 <Text style={styles.grid_text}>开发博客</Text>
              </View>
          </TouchableHighlight>
				</View>
				<View style={styles.grid_row}>
        <TouchableHighlight
          underlayColor="rgba(34,26,38,0.1)"
          style={[styles.grid_item,styles.grid_left]}
          onPress={() => this.pagePush('图片站',gallery)}
        >
              <View style={styles.slider_container}>
                 <Image style={styles.icon} source={require('./../Assets/images.png')} resizeMode={Image.resizeMode.contain}/>
                 <Text style={styles.grid_text}>图片站</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            style={[styles.grid_item,styles.grid_right]}
            onPress={() =>this.pagePush('团队介绍',ourteam)}
          >
              <View style={styles.slider_container}>
                 <Image style={styles.icon} source={require('./../Assets/magic-wand.png')} resizeMode={Image.resizeMode.contain}/>
                 <Text style={styles.grid_text}>团队介绍</Text>
              </View>
          </TouchableHighlight>
          </View>
				<View style={styles.grid_row}>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            style={[styles.grid_item,styles.grid_left]}
            onPress={() => this.pagePush('关于我们',aboutus)}
          >
              <View style={styles.slider_container}>
                 <Image style={styles.icon} source={require('./../Assets/users.png')} resizeMode={Image.resizeMode.contain}/>
                 <Text style={styles.grid_text}>关于我们</Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(34,26,38,0.1)"
            style={[styles.grid_item,styles.grid_right]}
            onPress={() => this.pagePush('商城',shop)}
          >
            <View style={styles.slider_container}>
                <Image style={styles.icon} source={require('./../Assets/cart.png')} resizeMode={Image.resizeMode.contain}/>
                <Text style={styles.grid_text}>商城</Text>
            </View>
          </TouchableHighlight>
				</View>
      </View>
     </ScrollView>
    );
  }
}

export {Home as default};
