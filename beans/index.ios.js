/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

const REQUSET_URL = 'http://api.douban.com/v2/movie/top250';

class beans extends Component {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#eae7ff',
    paddingTop: 23,
  },
  loading:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  image:{
    width:100,
    height:150,
    margin:6,
  },
  item:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100,52,201,0.1)',
    paddingBottom: 6,
    marginBottom: 6,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:"#6435c9",
    marginBottom:6
  },
  itemMeta:{
    fontSize: 16,
    color:'rgba(0,0,0,0.6)',
    marginBottom:6
  },
  redText:{
    color:'#db2828',
    fontSize:15
  }
});

AppRegistry.registerComponent('beans', () => beans);
