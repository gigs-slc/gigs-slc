import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import {CustomHeader} from './index';


export class AlertsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <CustomHeader title="Alerts" navigation={this.props.navigation} isHome={true}/>
          <View style={styles.welcomeContainer}>

        </View>
        <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color:'blue', fontSize:44}}>ALERTS!</Text>
          </View>
          </View>
        </SafeAreaView>
      );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      width: '100%',
      color: 'white',
      fontSize: 36,
      height: '100%',

    },

contentContainer: {
  paddingTop: 30
},
welcomeContainer: {
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
},
welcomeImage: {
  width: '100%',
  height: 130,
  resizeMode: 'contain',
  marginTop: 3,
  marginLeft: -10,
},
getStartedContainer: {
  alignItems: 'center',
  marginHorizontal: 15,
},
homeScreenFilename: {
  marginVertical: 7
},
codeHighlightText: {
  color: 'rgba(96,100,109, 0.8)'
},
codeHighlightContainer: {
  backgroundColor: 'rgba(0,0,0,0.05)',
  borderRadius: 3,
  paddingHorizontal: 4
},
getStartedText: {
  fontSize: 17,
  color: 'black',
  lineHeight: 24,
  textAlign: 'center'
},
tabBarInfoContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  backgroundColor: '#fbfbfb',
  paddingVertical: 20
},
tabBarInfoText: {
  fontSize: 17,
  color: 'rgba(96,100,109, 1)',
  textAlign: 'center'
},
navigationFilename: {
  marginTop: 5
},
card: {
  width: '100%'
},
cardButton: {
  width: '100%'
},
container1: {
  flex: 1,
  backgroundColor: 'black',
  width: '100%',
  color: 'white',
  alignItems: 'center',
  paddingTop: 20
},
view: {
  backgroundColor: "white",
  borderRadius: 8,
  shadowColor: "rgba(0, 0, 0, 0.1)",
  shadowRadius: 15,
  shadowOpacity: 1,
  width: '85%',
  marginTop: 24,
  alignItems: "center",
},
button: {
  width: '90%',
  justifyContent: 'center',
  backgroundColor: '#262626',
  borderRadius: 8,
  marginBottom: 8,
  height: 120,
  flexDirection: 'row',
  alignItems: 'center',

},
question: {
  backgroundColor: "transparent",
  color: "#fff",
  fontFamily: "Verdana",
  fontSize: 18,
  fontStyle: "normal",
  width: '90%',
  marginLeft: 10,
  paddingRight: 15,
},
// answer: {
//   color: "#A0A0A0",
//   fontFamily: "Verdana",
//   fontSize: 18,
//   fontStyle: "normal",
//   fontWeight: "normal",
//   textAlign: "left",
//   letterSpacing: 0.25,
//   backgroundColor: "transparent",
//   marginTop: 10,
//   marginBottom: 20,
//   width: '90%',
// },
});


