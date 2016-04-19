/**
 * Sample React Native App
 * https://github.com/facemusic/react-native
 */
'use strict';

import styles from '../Styles/Main';
import MusicDetail from './MusicDetail';
// ../ shangyijimulu
import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
} from 'react-native';

class MusicSearchResult extends React.Component {
// class name - ml
  constructor(props){
    super(props);

    this.state ={
      musics:this.props.result.musics,//push > result > clone
      total:this.props.result.total,
      count:this.props.result.count,
      start:this.props.result.start,
      query:this.props.query,
    }

    this.REQUEST_URL = 'http://api.douban.com/v2/music/search';
      console.log(this.REQUEST_URL);
      this.dataSource = new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      });
  }

  requestURL(
    url = 'http://api.douban.com/v2/music/search',
    count = this.state.count,
    start = this.state.start + this.state.count,
    query = this.state.query
    ){
    return(
      `${url}?q=${query}&count=${count}&start=${start}`
      )
  }

showMusicDetail(music){
  this.props.navigator.push({
    title:music.title,
    component:MusicDetail,
    passProps:{music}
  });

}
renderMusicList(music){

  return(
    <TouchableHighlight
    underlayColor="rgba(34,26,38,0.1)"
    onPress={() =>
      this.showMusicDetail(music)
    }
    >
    <View style = {styles.item} key = {music.id}>
      <View style = {styles.itemImage}>
        <Image
          source={{uri:music.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>
          {music.title}
        </Text>
        <Text style={styles.itemMeta}>
          {music.alt_title}({music.attrs.pubdate})
        </Text>
        <Text style={styles.itemMeta} numberOfLines={1}>
           {music.attrs.singer} 作品
        </Text>
        <Text style={styles.itemMeta}>
          {music.attrs.publisher}
        </Text>
        <Text style={styles.redText}>{music.rating.average}</Text>
      </View>
    </View>
    </TouchableHighlight>
    );
}

  onEndReached(){
    if (this.state.total > this.state.start) {
      this.loadMore();
    }
  }
  loadMore(){
    console.log(this.requestURL());
    fetch(this.requestURL())
    .then(response => response.json())
    .then(responseData => {
      let newStart = responseData.start + responseData.count; //xin kaishidian
      this.setState({
        musics:[...this.state.musics,...responseData.musics],
        start:newStart,
      });
    })
  }
  renderFooter(){
    if (this.state.total > this.state.start) {
      return(
        <View style={{marginVertical:20,paddingBottom:50,alignSelf:'center'}}>
          <ActivityIndicatorIOS/>
        </View>
        );
    }else{
      return(
        <View style={{marginVertical:20,paddingBottom:50,alignSelf:'center'}}>
          <Text style={{color:'rgba(0,0,0,0.5)'}}>没有可以显示的内容了:)</Text>
        </View>
      );
    }
  }
  render() {
    return (
      //listview 数据源 模板 数组 字典 key
      <View style={[styles.container,{paddingTop:0,paddingBottom:0}]}>
        <ListView
          renderFooter={this.renderFooter.bind(this)}
          pageSize={this.state.count}
          onEndReached={this.onEndReached.bind(this)}
          initialListSize={this.state.count}
          dataSource={this.dataSource.cloneWithRows(this.state.musics)}
          renderRow={this.renderMusicList.bind(this)}
          />

      </View>
    );
  }
}

export { MusicSearchResult as default };
//输出 export
