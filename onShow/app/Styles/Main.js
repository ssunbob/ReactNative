'use strict';

import React, {
  PixelRatio,//屏幕比特率
} from 'react-native';

let {StyleSheet} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  wrapper: {
  },
  slider_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  grid:{
		padding:10/PixelRatio.get(),
		marginTop:10/PixelRatio.get(),
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
  height: 32,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export {styles as default};