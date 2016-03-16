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
} from 'react-native';

class USBoxDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			movieDetail:'',
			loaded:false,
		};

	const REQUEST_URL = `https://api.douban.com//v2/movie/subject/${this.props.movie.subject.id}`;
	this.fetchData(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail:responseData,
          loaded:true,
        });
      })
      .done()
  }
	render(){
		    if(!this.state.loaded){
      return(
        <View style={[styles.container,{paddingTop:60}]}>
          <View style={styles.loading}>
            <ActivityIndicatorIOS  
            size='large'
            color='#6435c9'
            />
          </View>
        </View>
        );
    }

    let movie = this.state.movieDetail;
    let summary = movie.summary.split(/\n/).map( p => {
    	return(
    		<View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
    			<Text style={styles.itemText}>　　{p}</Text>
    		</View>
    	);
    });
		return(
			<View style={[styles.container,{paddingTop:70}]}>
				<View style={[styles.item,{flexDirection:'column',marginLeft:5,marginRight:5,}]}>
					{summary}
				</View>
			</View>
		);
	}
}
export {USBoxDetail as default}