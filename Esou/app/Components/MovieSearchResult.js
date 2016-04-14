/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
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

class MovieSearchResult extends React.Component {
// class name - ml
  constructor(props){
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });
      
    this.state ={
      movies:this.props.result.subjects,//push > result > clone
      total:this.props.result.total,
      count:this.props.result.count,
      start:this.props.result.start,
      query:this.props.query,
    }

    this.REQUEST_URL = 'http://api.douban.com/v2/movie/search';
  }
  requestURL(
    url = this.REQUSET_URL,
    count = this.state.count,
    start = this.state.start,
    query = this.state.query
    ){
    return(
      `${url}?q=${query}&count=${count}&start=${start}`
      )
  }
  // fetchData(){
  //   fetch(this.requestURL())
  //     .then(response => response.json())
  //     .then(responseData => {
  //       let newStart = responseData.start + responseData.count; //xin kaishidian
  //       this.setState({
  //         movies:responseData.subjects,
  //         loaded:true,
  //         total:responseData.total,
  //         start:newStart,
  //       });
  //     })
  //     .done()
  // }
showMovieDetail(movie){
  this.props.navigator.push({
    title:movie.title,
    component:MovieDetail,
    passProps:{movie}
  });

}
renderMovieList(movie){

  return(
    <TouchableHighlight
    underlayColor="rgba(34,26,38,0.1)"
    onPress={() =>
      this.showMovieDetail(movie)
    }
    >    
    <View style = {styles.item}>
      <View style = {styles.itemImage}>
        <Image
          source={{uri:movie.images.small}}
          style={styles.image} 
        />    
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{movie.title}</Text>
        <Text style={styles.itemMeta}>
          {movie.original_title} ({movie.year})
        </Text>
        <Text style={styles.redText}>{movie.rating.average}</Text>
      </View>
    </View>
    </TouchableHighlight>
    );
}
  onEndReached(){
    console.log('end reached! start:${this,state.start},total:${this.state.total}');
    if (this.state.total > this.state.start) {
      this.loadMore();
    }
  }
  loadMore(){
    fetch(this.requestURL())
    .then(response => response.json())
    .then(responseData => {
      let newStart = responseData.start + responseData.count; //xin kaishidian
      this.setState({
        movies:[...this.state.movies,...responseData.subjects],
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
        <View style={{marginVertical:20,paddingBottom:50,alignSelf:'center'}}>
          <Text style={{color:'rgba(0,0,0,0.5)'}}>没有可以显示的内容了:)</Text>
        </View>
    }
  }
  render() {
    //panduanzairuzhuangtai
    // if(!this.state.loaded){
    //   return(
    //     <View style={[styles.container,{paddingTop:60}]}>
    //       <View style={styles.loading}>
    //         <ActivityIndicatorIOS
    //           size='large'
    //           color='#6435c9'
    //         />
    //       </View>
    //     </View>
    //     );
    // }
    return (
      //listview 数据源 模板 数组 字典 key
      <View style={[styles.container,{paddingTop:0,paddingBottom:0}]}>
        <ListView
          renderFooter={this.renderFooter.bind(this)}
          pageSize={this.state.count}
          onEndReached={this.onEndReached.bind(this)}
          initialListSize={this.state.count}
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMovieList.bind(this)}
          />

      </View>
    );
  }
}

export { MovieSearchResult as default };
//输出 export
