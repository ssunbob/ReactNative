/**
* 2016.3.16
*/
'use strict';

import React from 'react-native';
import styles from '../Styles/Main';
import MusicSearchForm from './MusicSearchForm';

let {
  Text,
  View,
  NavigatorIOS,
} = React;

class MusicSearch extends React.Component {
	render() {

		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title:'音乐搜索',
					component:MusicSearchForm
				}}
				shadowHidden={true}
				barTintColor="#229132"
				titleTextColor="rgba(255,255,255,0.8)"
				tintColor="rgba(255,255,255,0.8)"
				translucent={true}
			/>
		);
	}
}

export {MusicSearch as default};
