import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, Button } from 'react-native'
import {CustomHeader} from './index';
import { Avatar } from 'react-native-paper';

export class JobPostScreen extends Component {

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <CustomHeader title="Post a Job" navigation={this.props.navigation} isHome={false}/>
          <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 5, padding: 5, color: 'white'}}
                placeholder='Job Title'
                placeholderTextColor='#262626'
              />
               <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 5, padding: 5, color: 'white'}}
                placeholder='Budget'
                placeholderTextColor='#262626'
              />
               <TextInput
                style={{height: 40, borderRadius: 5, backgroundColor: '#969696', marginTop: 5, padding: 5, color: 'white'}}
                placeholder='Amount of People'
                placeholderTextColor='#262626'
              />
               <TextInput
                style={{height: 100, backgroundColor: '#969696', marginTop: 5, borderRadius: 5, padding: 5, color: 'white'}}
                placeholder='Job Description'
                placeholderTextColor='#262626'
                multiline={true}
              />
              <Button 
                title='Submit'
                color='white'
                style={{backgroundColor:'#969696'}}
                />
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


