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
  Image
} from 'react-native';

const REQUSET_URL = 'http://api.douban.com/v2/movie/top250';

class MovieList extends Component {
// class name
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
    );
}
  render() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中...</Text>
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

export {MovieList as default};
//shuchu export
