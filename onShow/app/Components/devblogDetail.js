/**
 * 开发博客－详情
 * devblog－detail
 */
'use strict';

import styles from '../Styles/Main';
// ../ 上级目录
import React, {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  WebView,
  Image,
  ActivityIndicatorIOS,
} from 'react-native';

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
let jscode = `
    var img = document.getElementsByTagName("img");
    var p = document.getElementsByTagName("p");
    var section = document.getElementsByTagName("section");
    for (var i=0;i<img.length;i++){
      img[i].style.minWidth="95%";
      img[i].style.maxWidth="95%";
      img[i].style.height="auto";
      img[i].style.display="block";
      img[i].style.marginLeft="auto";
      img[i].style.marginRight="auto";
    }
    for (var i=0;i<p.length;i++){
      p[i].style.fontFamily='Helvetica Neue';
      p[i].style.fontSize="16";
    }
    for (var i=0;i<section.length;i++){
      section[i].style.fontFamily='Helvetica Neue';
      section[i].style.fontSize="16";
    }
`;
let lists = this.state.devblogDetail;
		return(
      <View style={[{flex:1},{paddingTop:60}]}>
        <WebView source={{html: lists.content.rendered}}
        style={styles.container}
        injectedJavaScript={jscode}
        allowsInlineMediaPlayback={true}
        AutomaticallyAdjustContentInsets={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}>
        </WebView>
      </View>
		);
	}
}
export {devblogDetail as default}
