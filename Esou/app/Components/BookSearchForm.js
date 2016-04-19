/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';

import BookSearchResult from './BookSearchResult';
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

class BookSearchForm extends React.Component {

constructor(props){
  super(props);
  this.dataSource = new ListView.DataSource({
    rowHasChanged:(row1,row2) => row1 !== row2
  });
  this.state={
    query:'',
    loaded:true,//seart search
    booksearchHistory:[],
  }
  AsyncStorage.getItem('booksearchHistory')
    .then((booksearchHistory) =>{
        if (booksearchHistory) {
          this.setState({
          booksearchHistory:JSON.parse(booksearchHistory)
        });
      }
    });
}
async search(item){
  try{
    await this.setState({
      query:item
    });
    this.fetchData();
  }catch(error){
    console.log(error);
  }
}

deleteBookSearchHistoryItem(item){
  let newBookSearchHistory = new Set(this.state.booksearchHistory);
  newBookSearchHistory.delete(item);
  this.setState({
    booksearchHistory:[...newBookSearchHistory]
  });
  AsyncStorage.setItem(
      'booksearchHistory',JSON.stringify([...newBookSearchHistory])
      //shuzuzhuanhuacheng zifuchuan
      //bendi cunchu
    );
}
renderBookSearchHistoryList(item){
  return(
    <TouchableHighlight
      underlayColor="rgba(34,26,38,0.1)"
      onPress={() => this.search(item)
      }
    >
    <View style = {styles.item}>
    <TouchableHighlight
    onPress={() => this.deleteBookSearchHistoryItem(item)}
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

booksearchHistory(){
  let newBookSearchHistory = [...new Set([this.state.query,...this.state.booksearchHistory])]
// zhuijia shuzu
// chongfu panduan
  this.setState({
    booksearchHistory:newBookSearchHistory
  });

  AsyncStorage.setItem(
      'booksearchHistory',JSON.stringify(newBookSearchHistory)
    );
// 改变数组
}
  fetchData(){
    this.booksearchHistory();
    this.setState({
      loaded:false,
    });
    const REQUSET_URL = `http://api.douban.com/v2/book/search?q=${this.state.query}`
    fetch(REQUSET_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          loaded:true,
        })
        this.props.navigator.push({
          title:`搜索 "${this.state.query}" 的结果`,
          component:BookSearchResult,
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
            value={this.state.query}// show text while searching
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
        <ListView style={{marginBottom:15,paddingLeft:6,paddingRight:6}}
          dataSource={this.dataSource.cloneWithRows(this.state.booksearchHistory)}
          renderRow={this.renderBookSearchHistoryList.bind(this)}
          enableEmptySections={true}
          />
      </View>
    );
  }
}

export { BookSearchForm as default };
//输出 export
