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

class SearchResult extends React.Component {
// class name - ml
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });
      
    this.state ={
      movies:dataSource.cloneWithRows(this.props.result)//push > result > clone
    }
  }

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
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
          />

      </View>
    );
  }
}

export { SearchResult as default };
//输出 export
