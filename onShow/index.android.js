/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  PixelRatio//屏幕比特率
} from 'react-native';

class onShow extends Component {
  render() {
    return (
      <View style={styles.grid}>
				<View style={styles.grid_row}>
					<View style={styles.grid_item}>
             <Text style={styles.grid_text}>轮播图</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Text style={styles.grid_text}>作品</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Text style={styles.grid_text}>开发博客</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Text style={styles.grid_text}>图片站</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Text style={styles.grid_text}>团队介绍</Text>
          </View>
				</View>
				<View style={styles.grid_row}>
					<View style={[styles.grid_item,styles.grid_left]}>
             <Text style={styles.grid_text}>关于我们</Text>
          </View>
					<View style={[styles.grid_item,styles.grid_right]}>
             <Text style={styles.grid_text}>商城</Text>
          </View>
				</View>
      </View>
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
		//height:270/PixelRatio.get(),
    
    padding:20/PixelRatio.get(),
    justifyContent:'center',
  	alignItems:'center',
	},
  grid_text:{
 		textAlign:'center',   
  },
  grid_left:{
  marginRight:10/PixelRatio.get(),
  },
  grid_right:{
  marginLeft:10/PixelRatio.get(),
  },
});

AppRegistry.registerComponent('onShow', () => onShow);
