/**
* 2016.3.16
*/
'use strict';

import React from 'react-native';
import styles from '../Styles/Main';
import USBoxlist from './USBoxlist';

let {
  Text,
  View,
  NavigatorIOS,
} = React;

class USBox extends React.Component {
	render() {
		
		return (
			<NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title:'北美票房',
					component:USBoxlist
				}}
				shadowHidden={true}
				barTintColor="darkslateblue"
				titleTextColor="rgba(255,255,255,0.8)"
				tintColor="rgba(255,255,255,0.8)"
				translucent={true}
			/>
		);
	}
}

export {USBox as default};