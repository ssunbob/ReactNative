/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class onShow extends Component {
  render() {
    return (
      <View style={styles.grid}>
				<View style={styles.grid_row}>
					<Text style={styles.grid_item}>1</Text>
					<Text style={styles.grid_item}>2</Text>
				</View>
				<View style={styles.grid_row}>
					<Text style={styles.grid_item}>1</Text>
					<Text style={styles.grid_item}>2</Text>
					<Text style={styles.grid_item}>3</Text>
				</View>
				<View style={styles.grid_row}>
					<Text style={styles.grid_item}>1</Text>
					<Text style={styles.grid_item}>2</Text>
					<Text style={styles.grid_item}>3</Text>
					<Text style={styles.grid_item}>4</Text>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	grid:{
		padding:5,
		marginTop:25,
		borderColor:'#e7e7e7',
	},
	grid_row:{
		flex:1,
		flexDirection:'row',
		padding:5,
	},
	grid_item:{
		flex:1,
		backgroundColor:'#e7e7e7',
		height:30,
		textAlign:'center',
	},
});

AppRegistry.registerComponent('onShow', () => onShow);
