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
} from 'react-native';

import styles from '../Styles/Main';

import Home_slider from '../Components/Home_slider';

class Home extends Component {
  render() {
    return (
      <ScrollView>
      <View>
      <Home_slider />
      </View>
      <View style={styles.grid}>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./../Assets/map.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>作品展示</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Image style={styles.icon} source={require('./../Assets/quill.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>开发博客</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./../Assets/images.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>图片站</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Image style={styles.icon} source={require('./../Assets/magic-wand.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>团队介绍</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./../Assets/users.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>关于我们</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
              <Image style={styles.icon} source={require('./../Assets/cart.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>商城</Text>
          </View>
				</View>
      </View>
     </ScrollView>
    );
  }
}

export {Home as default};
