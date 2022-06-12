import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';



export default class staffacount extends Component {


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.profile}
                  source={{uri: 'https://cdn-icons-png.flaticon.com/512/149/149995.png'}}/>
                <Text style={styles.name}>User: Alex Wang</Text>
                <Text style={styles.userInfo}>Email: alexwant20203@gmail.com </Text>
                <Text style={styles.userInfo}>Region: California </Text>
                <Text style={styles.userInfo}>Status: Active </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity style={{ backgroundColor: 'powderblue',}}>
              <Text style={styles.info}>MAIN</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25442.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity style={{ backgroundColor: 'powderblue',}}>
              <Text style={styles.info}>SETTING</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25304.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity style={{ backgroundColor: 'powderblue',}}>
                <Text style={styles.info}>EMERGENCY</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25297.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity style={{ backgroundColor: 'powderblue',}}>
                <Text style={styles.info}>LIKES</Text>
              </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25647.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity style={{ backgroundColor: 'powderblue',}}>
                <Text style={styles.info}>CHATS</Text>
              </TouchableOpacity>
              </View>
            </View>

          </View>
      </View>
    );
  }
}

export default staffacount;


const styles = StyleSheet.create({
  header:{
    backgroundColor: '#fff8dc'
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  profile: {
    width: 133,
    height: 133,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    fontWeight:'bold',
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "powderblue",
    height:500,
    alignItems:'center',
    marginBottom: 2
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingRight:150
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:25
  },
  icon:{
    width:60,
    height:60,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
    marginBottom: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
