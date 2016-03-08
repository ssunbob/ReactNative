var React = require('react-native');
var{
	AppRegistry,
	StyleSheet,
	View,
	Text
} = React;

var Header = React.createClass({
    render:function(){
    	return(
         <View style={styles.flex}>
         	<Text style={styles.font}>
         	<Text style={styles.font_1}>網易</Text>
         	<Text style={styles.font_2}>新闻</Text>
         	<Text>有态度°</Text>	
         	</Text>
         </View>
      )
    }
});

var styles = StyleSheet.create({
	flex:{
		marginTop:25,
		height:50,
		borderBottomWidth:3/React.PixelRatio.get(),
		borderBottomColor:'#EF2036',
		alignItems:'center',
	},
	font:{
		fontSize:25,
		fontWeight:'bold',
		textAlign:'center',
	},
	font_1:{
		color:'#cd1d1c',
	},
	font_2:{
		color:'#fff',
		backgroundColor:'#cd1d1c',
	}

});

module.exports = Header;