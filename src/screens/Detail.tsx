/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Detail = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
      style={{
        margin: 20,
        height: 45,
        backgroundColor: '#ffcced',
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>Detail</Text>
    </TouchableOpacity>
  );
};
export default Detail;
