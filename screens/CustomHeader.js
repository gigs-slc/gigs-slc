import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


export class CustomHeader extends Component {
  render() {
    let { navigation, isHome, title } = this.props;
    return (
      <View style={{ flexDirection: 'row', height: 50,  marginTop: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {isHome ? (
            <TouchableOpacity  style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 100,
                height: 100
              }} onPress={() => navigation.openDrawer()}>
              {/* <Image
                style={{ width: 30, height: 30 }}
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
              /> */}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 100,
                height: 100
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: 30, height: 30, marginLeft:10 }}
                source={require('../Images/arrow.png')} 
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flex: 1.5, justifyContent: 'center', height: 50,}}>
          <Text style={{ textAlign: 'center', fontSize: 32, color: 'white' }}>
            {title}
          </Text>
        </View>
        <View style={{ flex: 1, height: 50, justifyContent: 'center' }}>
          {/* <Image
            style={{ width: 30, height: 30 }}
            // source={IMAGE.ICON_DOTS}
            resizeMode="contain"
          /> */}
        </View>
      </View>
    );
  }
}
