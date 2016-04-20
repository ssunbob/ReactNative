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
} from 'react-native';

class onShow extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.grid}>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_crousel]}>
            <Image style={styles.icon} source={require('./app/Assets/images.png')} resizeMode={Image.resizeMode.contain}/>
            <Text style={styles.grid_text}>轮播图</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./app/Assets/map.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>作品展示</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Image style={styles.icon} source={require('./app/Assets/quill.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>开发博客</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./app/Assets/images.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>图片站</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Image style={styles.icon} source={require('./app/Assets/magic-wand.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>团队介绍</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Image style={styles.icon} source={require('./app/Assets/users.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>关于我们</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
              <Image style={styles.icon} source={require('./app/Assets/cart.png')} resizeMode={Image.resizeMode.contain}/>
             <Text style={styles.grid_text}>商城</Text>
          </View>
				</View>
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	grid:{
		padding:10/PixelRatio.get(),
		marginTop:25,
		borderColor:'#e7e7e7',
	},
	grid_row:{
		flex:1,
		flexDirection:'row',
		padding:10/PixelRatio.get(),
	},
	grid_item:{
		flex:1,
		backgroundColor:'#e7e7e7',
		height:200/PixelRatio.get(),
    padding:20/PixelRatio.get(),
    justifyContent:'center',
  	alignItems:'center',
	},
  grid_crousel:{
    height:270/PixelRatio.get(),
  },
  grid_text:{
    paddingTop:20/PixelRatio.get(),
    textAlign:'center',
  },
  grid_left:{
  marginRight:10/PixelRatio.get(),
  },
  grid_right:{
  marginLeft:10/PixelRatio.get(),
  },
  icon:{
  width: 32,
  height: 32
  }
});

AppRegistry.registerComponent('onShow', () => onShow);
