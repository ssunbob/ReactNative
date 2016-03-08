/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
//var Header = require('./header');
import Header from './header';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class webList extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
        <List title="宇航员登上火星"></List>
        <List title="宇航员登上火星"></List>
        <List title="宇航员登上火星"></List>
        <List title="宇航员登上火星"></List>
      </View>
    );
  }
}

class List extends Component{
  render(){
    return({
      <View style = {styles.list_item}>
        <Text style = {styles.list_item_font}>{this.props.title}</Text>
      </View>
    });
  }
}

class ImportentNews extends Component{
  show:function(title){
    alert(title);
  },
  render(){
    var news = [];
    for (var i in this.props.news) {
      var text = {
        <Text 
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}>
          {this.props.news[i]}
        </Text>
      };
      news.push(text);
    };
    return(<View style={styles.flex}>
      <Text style={styles.news_title}>今日要闻</Text>
      {news}
    </View>);
  };
}

const styles = StyleSheet.create({
 flex:{
  flex:1
 },
 list_item:{
  height:40,
  marginLeft:10,
  marginRight:10,
  borderBottomWidth:1,
  borderBottomColor:'#ddd',
  justifyContent:'center'
 },
 list_item_font:{
  fontSize:16
 }
});

AppRegistry.registerComponent('webList', () => webList);
