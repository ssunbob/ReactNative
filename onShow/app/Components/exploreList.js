'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

import styles from '../Styles/Main';

class explore extends Component {

  constructor(props){
    super(props);
    this.state = {
      lists:[],
      loaded:false,
      // count:20,
      // start:0,
      // total:10,
    };

    this.REQUEST_URL = 'https://172.24.10.176/wordpress/wp-json/wp/v2/posts';
    this.dataSource = new ListView.Datasource({
      rowHasChanged:(row1,row2) => row1!== row2
    });
    this.fetchData();
  }

  // requestURL(
  //   url = this.REQUEST_URL,
  //   count = this.state.count,
  //   start = this.state.start
  // ){
  //   return(
  //     `${url}?count=${count}&start=${start}`
  //   )
  // }

  fetchData(){
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => {
      // let newStart = responseData.start + responseData.count;
      this.setState({
        lists:this.state.lists.cloneWithRows(responseData),
        loaded:true
      });
    })
    .done()
  }

  renderList(list){
    return(
      <View style = {styles.grid_row}>
        <View style = {styles.grid_item}>
          <View style = {styles.col_image}>
            <Image
              source={{uri:list.better_featured_image.small}}
              style={styles.list_image}
            />
          </View>
          <View style={styles.col_content}>
            <Text style={styles.list_header}>{list.title.rendered}</Text>
            <Text style={styles.list_meta}>
              {list.original_title} ({list.year})
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    if(!this.state.loaded){
    //未获取完数据,提示正在加载
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中...</Text>
          </View>
        </View>
        );
    }
    return (
      <ScrollView>
      <View style={styles.grid}>
        <Text style={styles.welcome}>
          Welcome to {this.props.title}!
        </Text>
        <ListView
        dataSource={this.state.lists}
        renderRow={this.renderList}
        />
      </View>

      </ScrollView>
    );
  }
}

export {explore as default};
