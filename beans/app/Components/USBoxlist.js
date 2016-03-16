/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from '../Styles/Main';

import USBoxDetail from './USBoxDetail';
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

class USBoxlist extends React.Component {
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
showMovieDetail(movie){
  this.props.navigator.push({
    title:movie.subject.title,
    component:USBoxDetail,
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
        <View style={[styles.container,{paddingTop:60}]}>
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
      //listview 数据源 模板 数组 字典 key
      <View style={[styles.container,{paddingTop:60,paddingBottom:50}]}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
          />

      </View>
    );
  }
}

export { USBoxlist as default };
//输出 export
