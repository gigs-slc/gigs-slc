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
// import firebase from '../../firebase';


export class RegisterScreen extends Component {

  state = ({
    email: '',
    password: '',
    checkPassword: '',
  })

  signUpUser = (email, password) => {
    try{
      if(this.state.password.length < 6) {
        alert('Please enter at least 6 characters')
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
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
        {/* <CustomHeader title='Register' navigation={this.props.navigation} /> */}
        <Text style={styles.login}>SIGN UP</Text>
        <View style={{ width: "85%" }}>
          {/* <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name='user' size={24} color='#fff' /> */}

          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <TextInput
            style={styles.input}
            placeholder='Re Password'
            secureTextEntry
            onChangeText={checkPassword => this.setState({ checkPassword })}
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
              if(this.state.password !== this.state.checkPassword) {
                alert('Make sure your passwords are identical')
              }else{
                this.signUpUser(this.state.email, this.state.password),
                this.props.navigation.navigate('Home')
              }
            }}
          >
            <Text style={styles.btnText}>sign up</Text>
          </TouchableOpacity>

        </View>
        <View style={{ padding: 30, flexDirection: "row" }}>
          <Text style={{ color: "#fff" }}>Have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "#3b5998" }}> SIGN IN</Text>
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