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
  Image,
  View
} from 'react-native';

class abc extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
        <List title="宇航员在太空宣布"></List>
        <List title="宇航员在太空宣布"></List>
        <List title="宇航员在太空宣布"></List>
        <List title="宇航员在太空宣布"></List>
        <Image style={styles.img} source={{uri:'http://b.hiphotos.baidu.com/news/crop%3D0%2C1%2C349%2C209%3Bw%3D638/sign=26207a788d82b90129e299734ebd8546/242dd42a2834349beae73fdaceea15ce37d3be88.jpg'}}/>
        <ImportantNews news={[
          '1.大连东软信息学院',
          '2.大连东软信息学院',
          '3.大连东软信息学院',
          '4.大连东软信息学院',
          '5.大连东软信息学院',
          '6.大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院大连东软信息学院'
          ]}></ImportantNews>
      </View>
    );
  }
}

class List extends Component{
  render(){
    return(
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
}

class ImportantNews extends Component{
  show(title){
    alert(title);
  }
  render(){
    var news = [];
    for(var i in this.props.news){
      var text = (
        <Text 
            onPress={this.show.bind(this,this.props.news[i])}
            numberOfLines={2}
            style={styles.news_item}>
            {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return(
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
      );
  }
}

const styles = StyleSheet.create({
 flex:{
  flex:1,
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
 },
 news_title:{
  fontSize:20,
  fontWeight:'bold',
  color:'#cd1d1c',
  marginLeft:10,
  marginTop:15,
 },
 news_item:{
  marginLeft:10,
  marginRight:10,
  fontSize:15,
  lineHeight:20,
 },
 img:{
  width:100,
  height:100,
 }
});

AppRegistry.registerComponent('abc', () => abc);
