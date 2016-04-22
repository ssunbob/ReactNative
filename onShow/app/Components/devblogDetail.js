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
  ScrollView,
  ListView,
  Image,
  ActivityIndicatorIOS,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

class devblogDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			devblogDetail:'',
			loaded:false,
		};

	const REQUEST_URL = `http://172.24.10.176/wordpress/artspace3/wp-json/wp/v2/posts/${this.props.lists.id}`;
  console.log(REQUEST_URL);
	this.fetchData(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          devblogDetail:responseData,
          loaded:true,
        });
      })
      .done()
  }
	render(){
		    if(!this.state.loaded){
      return(
        <View style={[styles.slider_container,{paddingTop:60}]}>
          <View style={styles.loading}>
            <ActivityIndicatorIOS
            size='large'
            color='#6435c9'
            />
          </View>
        </View>
        );
    }
let lists = this.state.devblogDetail;
		return(
      <ScrollView style={[styles.grid,{paddingTop:60}]}
        scrollEventThrottle={200}
        contentInset={{top: 0}}>
        <View style={styles.grid_row}>
				<View style={styles.list_item}>

					<HTMLView value={lists.content.rendered}/>

				</View>
        </View>
      </ScrollView>
			//</View>
		);
	}
}
export {devblogDetail as default}
