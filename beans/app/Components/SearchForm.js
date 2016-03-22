/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';

//import USBoxDetail from './USBoxDetail';
import SearchResult from './SearchResult';
// ../ shangyijimulu
import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
  TextInput,
} from 'react-native';

//const REQUSET_URL = 'http://api.douban.com/v2/movie/search?q={text}';

class SearchForm extends React.Component {
// class name - ml
constructor(props){
  super(props);
  this.dataSource = new ListView.DataSource({
    rowHasChanged:(row1,row2) => row1 !== row2
  });
  this.state={
    query:'',
    loaded:true,//seart search
    searchHistory:['frog','bob'],
  }
}

renderSearchHistoryList(item){
  return(
    <TouchableHighlight
      underlayColor="rgba(34,26,38,0.1)"
      onPress={() => {}
      }
    >
    <View style = {styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{item}</Text>
      </View>
    </View>
    </TouchableHighlight>
    );
}

  fetchData(){
    this.setState({
      loaded:false,
    });
    const REQUSET_URL = `http://api.douban.com/v2/movie/search?q=${this.state.query}`
    fetch(REQUSET_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          loaded:true,

        })
        this.props.navigator.push({
          title:responseData.title,
          component:SearchResult,
          passProps:{
            result:responseData.subjects
          }
        })
      })
      .done()
  }

  render() {

    return (
      //listview 数据源 模板 数组 字典 key
      <View style={[styles.container,{paddingTop:70,paddingBottom:50}]}>
        <View style={{
          paddingTop:7,
          paddingLeft:7,
          paddingRight:7,
          borderColor:"rgba(100,53,201,0.1)",
          borderBottomWidth:1,
        }}>
        <TextInput 
            style={{height:50}}
            placeholder='搜索......'
            clearButtonMode="while-editing"
            returnKeyType="search"
            onChangeText={(query) =>{
              this.setState({
                query
              });
            }}
            onSubmitEditing={this.fetchData.bind(this)}
        />
            <ActivityIndicatorIOS
              size='small'
              color='#6435c9'
              animating={!this.state.loaded}
              style={{
                position:'absolute',
                right:10,
                top:20,
              }}
            />
        </View>
        <Text style={styles.searchHeader}>搜索历史</Text>
        <ListView
          dataSource={this.dataSource.cloneWithRows(this.state.searchHistory)}
          renderRow={this.renderSearchHistoryList.bind(this)}
          />
      </View>
    );
  }
}

export { SearchForm as default };
//输出 export
