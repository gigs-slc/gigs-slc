import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput,  } from 'react-native'
import {CustomHeader} from './index';

import { Button } from 'react-native-elements'


export class JobPostScreen extends Component {

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <CustomHeader title="Post a Job" navigation={this.props.navigation} isHome={false}/>
          <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 25, padding: 5, color: 'white'}}
                placeholder='Job Title'
                placeholderTextColor='black'
              />
               <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 25, padding: 5, color: 'white'}}
                placeholder='Full Name'
                placeholderTextColor='black'
              />
               <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 25, padding: 5, color: 'white'}}
                placeholder='Job Date'
                placeholderTextColor='black'
              />
              <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 25, padding: 5, color: 'white'}}
                placeholder='What is your budget?'
                placeholderTextColor='black'
              />
              <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 25, padding: 5, color: 'white'}}
                placeholder='Job Type'
                placeholderTextColor='black'
              />
             
               <TextInput
                style={{height: 150, backgroundColor: '#969696', marginTop: 25, borderRadius: 5, padding: 5, color: 'white'}}
                placeholder='Additional Details'
                placeholderTextColor='black'
                multiline={true}
              />
              <View>
              <Button 
                title='Post your Job!'
                color='white'
                buttonStyle={{backgroundColor:'#0053A7', marginTop:150, width:'65%', borderRadius:20, marginLeft:'18%', height:70  }}
                />
                </View>
        </SafeAreaView>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%'
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
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
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
  }
});


