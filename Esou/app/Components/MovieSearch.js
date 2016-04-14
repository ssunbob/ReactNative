/**
* 2016.3.16
*/
'use strict';

import React from 'react-native';
import styles from '../Styles/Main';
import MovieSearchForm from './MovieSearchForm';

let {
  Text,
  View,
  NavigatorIOS,
} = React;

class MovieSearch extends React.Component {
	render() {
		
		return (
			<NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title:'搜索',
					component:MovieSearchForm
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

export {MovieSearch as default};