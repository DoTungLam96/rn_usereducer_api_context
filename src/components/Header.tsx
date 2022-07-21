/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Header = ({
  onChangeUsername,
}: {
  onChangeUsername?: (id?: string) => void;
}) => {
  useEffect(() => {
    onChangeUsername && onChangeUsername();
  }, [onChangeUsername]);
  return (
    <View style={{marginBottom: 48}}>
      {(() => {
        // console.log('RE-RENDER HEADER');
      })()}
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            fontStyle: 'italic',
            color: '#2e98e8',
          }}>
          Back
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
          width: '100%',
          textAlign: 'center',
        }}>
        This is header
      </Text>
    </View>
  );
};
export default Header;
