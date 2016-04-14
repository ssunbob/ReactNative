/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';

//import USBoxDetail from './USBoxDetail';
import MovieSearchResult from './MovieSearchResult';
import icons from '../Assets/icon';
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
  AsyncStorage,//ben di cun chu
} from 'react-native';

//const REQUSET_URL = 'http://api.douban.com/v2/movie/Search?q={text}';

class MovieSearchForm extends React.Component {
// class name - ml
constructor(props){
  super(props);
  this.dataSource = new ListView.DataSource({
    rowHasChanged:(row1,row2) => row1 !== row2
  });
  this.state={
    query:'',
    loaded:true,//seart MovieSearch
    MovieSearchHistory:[],
  }
  AsyncStorage.getItem('MovieSearchHistory')
    .then((MovieSearchHistory) =>{
        if (MovieSearchHistory) {
          this.setState({
          MovieSearchHistory:JSON.parse(MovieSearchHistory)
        });
      }
    });
}
async MovieSearch(item){
  try{
    await this.setState({
      query:item
    });
    this.fetchData();
  }catch(error){
    console.log(error);
  }
}

deleteMovieSearchHistoryItem(item){
  let newMovieSearchHistory = new Set(this.state.MovieSearchHistory);
  newMovieSearchHistory.delete(item);
  this.setState({
    MovieSearchHistory:[...newMovieSearchHistory]
  });
  AsyncStorage.setItem(
      'MovieSearchHistory',JSON.stringify([...newMovieSearchHistory])
      //shuzuzhuanhuacheng zifuchuan
      //bendi cunchu
    );
}
renderMovieSearchHistoryList(item){
  return(
    <TouchableHighlight
      underlayColor="rgba(34,26,38,0.1)"
      onPress={() => this.MovieSearch(item)
      }
    >
    <View style = {styles.item}>
    <TouchableHighlight
    onPress={() => this.deleteMovieSearchHistoryItem(item)}
    underlayColor="rgba(34,26,38,0.1)">
      <Image
      style={styles.deleteIcon}
      source={{uri:icons.delete}} />
      </TouchableHighlight>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{item}</Text>
      </View>
    </View>
    </TouchableHighlight>
    );
}

MovieSearchHistory(){
  let newMovieSearchHistory = [...new Set([this.state.query,...this.state.MovieSearchHistory])]
// zhuijia shuzu
// chongfu panduan
  this.setState({
    MovieSearchHistory:newMovieSearchHistory
  });

  AsyncStorage.setItem(
      'MovieSearchHistory',JSON.stringify(newMovieSearchHistory)
    );
// 改变数组
}
  fetchData(){
    this.MovieSearchHistory();
    this.setState({
      loaded:false,
    });
    const REQUSET_URL = `http://api.douban.com/v2/movie/Search?q=${this.state.query}`
    fetch(REQUSET_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          loaded:true,
        })
        this.props.navigator.push({
          title:responseData.title,
          component:MovieSearchResult,
          passProps:{// chuan dicanshu 
            result:responseData,
            query:this.state.query,
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
            value={this.state.query}// show text while MovieSearching
            style={{height:50}}
            placeholder='搜索......'
            clearButtonMode="while-editing"
            returnKeyType="MovieSearch"
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
        <Text style={styles.SearchHeader}>搜索历史</Text>
        <ListView
          dataSource={this.dataSource.cloneWithRows(this.state.MovieSearchHistory)}
          renderRow={this.renderMovieSearchHistoryList.bind(this)}
          />
      </View>
    );
  }
}

export { MovieSearchForm as default };
//输出 export
