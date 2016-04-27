'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ScrollView,
  ListView,
  WebView,
  Text,
  Image,
} from 'react-native';

//获取本地JSON数据 teamData
var teamData = require('./../Assets/team.json');

import styles from '../Styles/Main';

class ourteam extends Component {

  constructor(props){
    super(props);
    this.state = {
      team:new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    }),
      loaded:false
    };
  }

//在组件将被加载时，使用setState：获取teamData数据
  componentWillMount (){
        this.setState({
          team:this.state.team.cloneWithRows(teamData),
          loaded:true
        });
  }
//渲染团队介绍列表
  renderTeamList(team){
  	let jscode = `
        var p = document.getElementsByTagName("p");
        for (var i=0;i<p.length;i++){
          p[i].style.fontFamily='Helvetica Neue';
          p[i].style.fontSize="16";
        }
    `;
  return(
    <View style={styles.grid_row}>
      <View style={styles.list_item}>
        <Text style={styles.list_header}>{team.id}.{team.title}</Text>
      <WebView
      source={{html: team.content}}
      style={{
        backgroundColor: 'transparent',
        height: 150,
        width: 350,
      }}
      injectedJavaScript={jscode}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scrollEnabled={true}>
      </WebView>
      </View>
    </View>
    );
  }

  render() {
    if(!this.state.loaded){
    //未获取完数据,提示正在加载
      return(
        <View style={styles.slider_container}>
          <View style={styles.loading}>
            <ActivityIndicatorIOS
            size='large'
            color='#6435c9'
            />
          </View>
        </View>
        );
    }
    return (
//获取数据完成,载入列表
//listview 数据源[数组 字典 key] 模板
      <ScrollView style={styles.grid}>
        <ListView
          dataSource={this.state.team}
          renderRow={this.renderTeamList}
          />
      </ScrollView>
    );
  }
}

export {ourteam as default};
