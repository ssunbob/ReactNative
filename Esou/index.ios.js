/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './app/Styles/Main';
import icons from './app/Assets/icon';
import MovieSearch from './app/Components/MovieSearch';
import BookSearch from './app/Components/BookSearch';
import MusicSearch from './app/Components/MusicSearch';

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
      selectedTab:'movie'
    };
    // 构造器 改初值
  }

  render() {
    return (
      <TabBarIOS barTintColor='#229132' tintColor='white'>
        <TabBarIOS.Item
        //systemIcon="featured"
        icon={{uri:icons.movie,scale:4.6}}
        title="电影"
        selectedIcon={{uri:icons.movie,scale:4.6}}
        selected={this.state.selectedTab === 'movie'}

        onPress={() => {
          this.setState({
            selectedTab:'movie'
          });
        }}
        >
          <MovieSearch />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.book,scale:4.6}}
        title="图书"
        selected={this.state.selectedTab === 'book'}
        selectedIcon={{uri:icons.book,scale:4.6}}
        onPress={() => {
          this.setState({
            selectedTab:'book'
          });
        }}
        >
          <BookSearch />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.music,scale:4.6}}
        title="音乐"
        selected={this.state.selectedTab === 'music'}
        selectedIcon={{uri:icons.music,scale:4.6}}
        onPress={() => {
          this.setState({
            selectedTab:'music'
          });
        }}
        >
          <MusicSearch />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Esou', () => Esou);
