/**
 * 开发博客－列表
 * devblog－list
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ListView,
  ScrollView,
  WebView,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

import styles from '../Styles/Main';

import devblogDetail from '../Components/devblogDetail';

class devblogList extends Component {

  constructor(props){
    super(props);
    this.state = {
      lists:[],
      loaded:false,
    };

    this.REQUEST_URL = 'http://172.24.10.176/wordpress/artspace3/wp-json/wp/v2/posts';
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1!== row2
    });
    this.fetchData();
  }

  fetchData(){
    fetch(this.REQUEST_URL)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      this.setState({
        lists:responseData,
        loaded:true,
      });
    })
    .done()
  }

  showListDetail(lists){
    this.props.navigator.push({
      title:lists.title.rendered,
      component:devblogDetail,
      rightButtonTitle: '回到主页',
      onRightButtonPress: () => this.props.navigator.popToTop(),
      passProps:{lists},
    });
  }

  renderList(lists){
    let jscode = `
        var p = document.getElementsByTagName("p");
        for (var i=0;i<p.length;i++){
          p[i].style.fontFamily='Helvetica Neue';
          p[i].style.fontSize="16";
        }
    `;
    return(
    <View style={styles.grid_row}>
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={() =>
          this.showListDetail(lists)
        }
        style={[styles.list_item,{flex:1}]}
      >
          <View style = {styles.col_image}>
          <Image
            source={{uri:lists.better_featured_image.source_url}}
            style={styles.image}
            resizeMode={Image.resizeMode.cover}
          />
          </View>
      </TouchableHighlight>
    <TouchableHighlight
      underlayColor="rgba(34,26,38,0.1)"
      onPress={() =>
        this.showListDetail(lists)
      }
      style={[styles.list_item,{flex:2}]}
    >
      <View style = {styles.col_item}>

      <Text style={styles.list_header}>{lists.title.rendered}</Text>
      <WebView
      source={{html: lists.excerpt.rendered}}
      style={{
        backgroundColor: 'transparent',
        height: 85,
        width: 230
      }}
      injectedJavaScript={jscode}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scrollEnabled={false}>
      </WebView>
      </View>
    </TouchableHighlight>
    </View>

    );
  }
  render() {
    if(!this.state.loaded){
    //未获取完数据,提示正在加载
      return(
        <View style={styles.slider_container}>
          <View style={styles.loading}>
            <ActivityIndicatorIOS
            size='large'
            color='#6435c9'
            />
          </View>
        </View>
        );
    }

    return (
      <ScrollView style={[styles.grid,{paddingTop:60}]}>
        <ListView
        dataSource={this.dataSource.cloneWithRows(this.state.lists)}
        renderRow={this.renderList.bind(this)}
        />
      </ScrollView>
    );
  }
}

export {devblogList as default};
