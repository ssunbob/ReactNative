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
  ListView
} from 'react-native';

class beans extends Component {

  constructor(props){
    super(props);
    let movies = [
      {title:'肖申克的救赎'},
      {title:'这个杀手不太冷'},
      {title:'阿甘正传'},
      {title:'霸王别姬'},
      {title:'美丽人生'},
    ];

    let dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });

    this.state = {
      movies:dataSource.cloneWithRows(movies)
    };

  }
  render() {
    return (
      //listview 数据源 模板
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={
            movie => <Text style={styles.itemText}>{movie.title}</Text>
          }
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
});

AppRegistry.registerComponent('beans', () => beans);
