/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './app/Styles/Main';

import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
//dangqianmulu
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TabBarIOS
} from 'react-native';

const REQUSET_URL = 'http://api.douban.com/v2/movie/top250';

class beans extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <TabBarIOS>
        <TabBarIOS.Item systemIcon="featured">
          <MovieList />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon="most-viewed" selected="true">
          <USBox />
        </TabBarIOS.Item>
      </TabBarIOS>
      //<MovieList />
      //listview 数据源 模板 数组 字典 key

    );
  }
}



AppRegistry.registerComponent('beans', () => beans);
