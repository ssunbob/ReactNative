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

class SearchForm extends React.Component {
// class name - ml

  render() {

    return (
      //listview 数据源 模板 数组 字典 key
      <View style={[styles.container,{paddingTop:70,paddingBottom:50}]}>
        <Text>搜索页面</Text>
      </View>
    );
  }
}

export { SearchForm as default };
//输出 export
