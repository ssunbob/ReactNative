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

import HTMLView from 'react-native-htmlview';

import styles from '../Styles/Main';

class exploreList extends Component {

  constructor(props){
    super(props);
    this.state = {
      lists:[],
      loaded:false,
    };

    this.REQUEST_URL = 'http://172.24.10.176/wordpress/wp-json/wp/v2/posts';
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1!== row2
    });
    this.fetchData();
  }

  fetchData(){
    fetch(this.REQUEST_URL)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        lists:responseData,
        loaded:true,
      });
      console.log(responseData);
    })
    .done()
  }

  showListDetail(lists){
    this.props.navigator.push({
      title:lists.title.rendered,
      component:exploreDetail,
      passProps:{lists}
    });
  }

  renderList(lists){
    return(
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={() =>
          this.showListDetail(lists)
        }
      >
      <View style = {styles.grid_row}>
        <View style = {styles.grid_item}>
          <View style = {styles.col_image}>
          </View>
          <View style={styles.col_content}>
          <Image
            source={{uri:lists.better_featured_image.source_url}}
            style={styles.list_image}
          />
            <Text style={styles.list_header}>{lists.title.rendered}</Text>

            <HTMLView  value={lists.excerpt.rendered}  />

          </View>
        </View>
      </View>
      </TouchableHighlight>
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
      <ScrollView style={[styles.container,{paddingTop:60}]}>
      <View style={styles.grid}>
        <ListView
        dataSource={this.dataSource.cloneWithRows(this.state.lists)}
        renderRow={this.renderList.bind(this)}
        />
      </View>
      </ScrollView>
    );
  }
}

export {exploreList as default};
