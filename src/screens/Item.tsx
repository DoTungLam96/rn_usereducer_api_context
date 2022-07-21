import React, { memo } from 'react';
import {Image, Text, View} from 'react-native';
import {HomeRespond} from '../models/User';

const ItemView = ({itemData}: {itemData: HomeRespond}) => {
  return (
    <View
      style={{
        margin: 8,
        padding: 16,
        borderWidth: 0.5,
        borderBottomColor: '#ccc',
      }}>
      {(() => {
        console.log('ItemView');
      })()}
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <Text style={{fontSize: 14, marginRight: 8}}>{itemData?.id} -</Text>
        <Text>{itemData?.address}</Text>
      </View>

      <Image style={{width: 130, height: 85}} source={{uri: itemData?.image}} />
    </View>
  );
};
export default memo(ItemView);
