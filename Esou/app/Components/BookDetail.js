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

class BookDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			bookDetail:'',
			loaded:false,
		};

	const REQUEST_URL = `https://api.douban.com/v2/book/${this.props.book.id}`;
	this.fetchData(REQUEST_URL);
  console.log(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          bookDetail:responseData,
          loaded:true,
        });
        console.log(responseData);
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
    let book = this.state.bookDetail;

    let summary = book.summary.split(/\n/).map( p => {
    	return(
    		<View style={{marginBottom:15,paddingLeft:6,paddingRight:6}} key={p}>
    			<Text style={styles.itemText}>　　{p}</Text>
    		</View>
    	);
    });
    let author_intro = book.author_intro.split(/\n/).map( p => {
      return(
        <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}} key={p}>
          <Text style={styles.itemText}>　　{p}</Text>
        </View>
      );
    });
		return(
      <ScrollView
        scrollEventThrottle={200}
        contentInset={{top: 0}}
        style={[styles.container,{paddingTop:70,marginBottom:50}]}
        key={book.id}>
        <View style={[styles.item,{flexDirection:'column',marginLeft:5,marginRight:5,}]}>
          <Text style={styles.itemHeader}>
            书籍简介
          </Text>
            {summary}
          <Text style={styles.itemHeader}>
            书籍详情
          </Text>
          <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
            <Text style={styles.itemText}>{book.pages} / {book.binding} / {book.price}</Text>
            <Text style={styles.itemText}>10位isbn：{book.isbn10}</Text>
            <Text style={styles.itemText}>13位isbn：{book.isbn13}</Text>
          </View>
          <Text style={styles.itemHeader}>
            作者简介
          </Text>
          {author_intro}
          <Text style={styles.itemHeader}>
            书籍目录
          </Text>
          <Text style={styles.itemText}>{book.catalog}</Text>
        </View>
      </ScrollView>

		);
	}
}
export {BookDetail as default}
