/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './app/Styles/Main';
import icons from './app/Assets/icon';
//import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import Featured from './app/Components/Featured';
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
    this.state = {
      selectedTab:'featured'
    };
  }

  render() {

    return (
      <TabBarIOS barTintColor='darkslateblue' tintColor='white'>
        <TabBarIOS.Item
        //systemIcon="featured"
        icon={{uri:icons.star,scale:4.6}}
        title="推荐电影"
        selectedIcon={{uri:icons.starActive,scale:4.6}}
        selected={this.state.selectedTab === 'featured'}
        
        onPress={() => {
          this.setState({
            selectedTab:'featured'
          });
        }}
        >
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.board,scale:4.6}}
        title="北美票房"
        selected={this.state.selectedTab === 'us_box'}
        selectedIcon={{uri:icons.boardActive,scale:4.6}}
        onPress={() => {
          this.setState({
            selectedTab:'us_box'
          });
        }}
        >
          <USBox />
        </TabBarIOS.Item>
      </TabBarIOS>
      //<MovieList />
      //<USBox />
      //<Featured />
      //listview 数据源 模板 数组 字典 key

    );
  }
}



AppRegistry.registerComponent('beans', () => beans);
