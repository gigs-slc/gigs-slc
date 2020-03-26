import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

// import firebase from '../../firebase';


export class LoginScreen extends Component {

  state = ({
    email: '',
    password: ''
  })

  signInUser = (email, password) => {
    try{

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
    }
    catch(error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>


        </View>
        <Text style={styles.login}>SIGN IN</Text>
        <View style={{ width: "85%" }}>
          {/* <FontAwesome5 name='user' size={24} color='#fff' /> */}

          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
          {/* <FontAwesome5 name='lock' size={24} color='#fff' /> */}
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >

          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              this.signInUser(this.state.email, this.state.password),
              (this.props.navigation.navigate('Home'))
            }}
          >
            <Text style={styles.btnText}>sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnText}>
              <FontAwesome5 name='facebook-f' size={24} color='#fff' /> Sign In
              With Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 30, flexDirection: "row" }}>
          <Text style={{ color: "#fff" }}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Register')
            }
          >
            <Text style={{ color: "#3b5998" }}> SIGN UP</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between"
  },
  login: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: "5%"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 30,
    overflow: "hidden"
  },
  userBtn: {
    backgroundColor: "#3b5998",
    padding: 15,
    marginBottom: 50,
    borderRadius: 30,
    overflow: "hidden"
  },
  btnContainer: {
    width: "85%"
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 250,
    height: 130,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
