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
  ListView,
  Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
} from 'react-native';

const REQUSET_URL = 'http://api.douban.com/v2/movie/us_box';

class USBox extends React.Component {
// class name - ml
  constructor(props){
    super(props);

    this.state = {
      movies:new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    }),
      loaded:false
    };
    this.fetchData();
  }

  fetchData(){
    fetch(REQUSET_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies:this.state.movies.cloneWithRows(responseData.subjects),
          loaded:true
        });
      })
      .done()
  }

renderMovieList(movie){

  return(
    <TouchableHighlight
    underlayColor="rgba(34,26,38,0.1)"
    onPress={() =>
      console.log('<${movie.subject.title}> touched!')
    }
    >    
    <View style = {styles.item}>
      <View style = {styles.itemImage}>
        <Image
          source={{uri:movie.subject.images.small}}
          style={styles.image} 
        />    
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{movie.subject.title}</Text>
        <Text style={styles.itemMeta}>
          {movie.subject.original_title} ({movie.subject.year})
        </Text>
        <Text style={styles.redText}>{movie.subject.rating.average}</Text>
      </View>
    </View>
    </TouchableHighlight>
    );
}
  render() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中...</Text>
            <ActivityIndicatorIOS  />
          </View>
        </View>
        );
    }
    return (
      //listview 数据源 模板 数组 字典 key
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
          />

      </View>
    );
  }
}

export { USBox as default };
//输出 export
