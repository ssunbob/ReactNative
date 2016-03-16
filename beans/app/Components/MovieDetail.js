/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';
// ../ shangyijimulu
import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
} from 'react-native';

class MovieDetail extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.loading}>
					<Text>MovieDetail</Text>
				</View>
			</View>
		);
	}
}
export {MovieDetail as default}