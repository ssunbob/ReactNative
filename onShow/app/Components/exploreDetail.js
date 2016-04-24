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
  WebView,
  Image,
  ActivityIndicatorIOS,
} from 'react-native';

// import HTMLView from 'react-native-htmlview';

class exploreDetail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			exploreDetail:'',
			loaded:false,
		};

	const REQUEST_URL = `http://172.24.10.176/wordpress/wp-json/wp/v2/posts/${this.props.lists.id}`;
  console.log(REQUEST_URL);
	this.fetchData(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          exploreDetail:responseData,
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
    let lists = this.state.exploreDetail;
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
export {exploreDetail as default}
