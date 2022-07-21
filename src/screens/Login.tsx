/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useLoginStore} from '../store/login/loginStore';
import * as Actions from '../store/login/actionTypes';
const Login = () => {
  const navigation = useNavigation();
  const [user, dispatchUser] = useLoginStore();
  //using api context
  //  const {user, setUser} = useContext(LoginContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={{flex: 1, padding: 16}}>
        <View style={{marginTop: 8}}>
          <View style={styles.borderView}>
            <TextInput
              onChangeText={text => setUsername(text)}
              placeholder="Username"
              style={{padding: 0, height: 45}}
            />
          </View>

          <View style={styles.borderView}>
            <TextInput
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={{padding: 0, height: 45}}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatchUser({
              type: Actions.LOGIN_DATA,
              data: {
                username: username,
                password: password,
              },
            });
            navigation.navigate('Home' as never, undefined as never);
          }}
          style={styles.btn}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  inputNum: {
    marginTop: 16,
    height: 45,
    borderRadius: 8,
    borderColor: '#ffcccc',
    borderWidth: 1,
    paddingLeft: 8,
    width: 100,
  },
  viewCal: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-evenly',
  },
  input: {
    marginTop: 16,
    height: 45,
    borderRadius: 8,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    paddingLeft: 8,
  },
  btn: {
    height: 45,
    marginTop: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderView: {
    marginTop: 16,
    height: 45,
    paddingHorizontal: 8,
    borderColor: '#707070',
    borderRadius: 6,
    borderWidth: 1,
  },
});
