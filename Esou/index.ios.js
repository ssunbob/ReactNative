/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './app/Styles/Main';
import icons from './app/Assets/icon';
import MovieSearch from './app/Components/MovieSearch';

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

class Esou extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab:'featured'
    };
    // 构造器 改初值
  }

  render() {
    return (
      <TabBarIOS barTintColor='darkslateblue' tintColor='white'>
        <TabBarIOS.Item
        //systemIcon="featured"
        icon={{uri:icons.star,scale:4.6}}
        title="电影"
        selectedIcon={{uri:icons.starActive,scale:4.6}}
        selected={this.state.selectedTab === 'featured'}
        
        onPress={() => {
          this.setState({
            selectedTab:'featured'
          });
        }}
        >
          <MovieSearch />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.board,scale:4.6}}
        title="图书"
        selected={this.state.selectedTab === 'us_box'}
        selectedIcon={{uri:icons.boardActive,scale:4.6}}
        onPress={() => {
          this.setState({
            selectedTab:'us_box'
          });
        }}
        >
          <MovieSearch />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.search,scale:4.6}}
        title="音乐"
        selected={this.state.selectedTab === 'search'}
        selectedIcon={{uri:icons.search,scale:4.6}}
        onPress={() => {
          this.setState({
            selectedTab:'search'
          });
        }}
        >
          <MovieSearch />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Esou', () => Esou);
