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
      passProps:{lists}
    });
  }

  renderList(lists){
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
      <Text style={styles.list_meta}>
        <HTMLView value={lists.excerpt.rendered}/>
      </Text>
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
