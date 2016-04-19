/**
* 2016.3.16
*/
'use strict';

import React from 'react-native';
import styles from '../Styles/Main';
import BookSearchForm from './BookSearchForm';

let {
  Text,
  View,
  NavigatorIOS,
} = React;

class BookSearch extends React.Component {
	render() {

		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title:'图书搜索',
					component:BookSearchForm
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

export {BookSearch as default};
