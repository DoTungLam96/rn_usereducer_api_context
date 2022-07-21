/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {DateOption} from '../models/DateModel';

const DateOptionItem = ({
  item,
  index,
  listDate,
  onChangeList,
  isLayoutState,
  itemChoose,
}: {
  item: DateOption;
  listDate: DateOption[];
  onChangeList: (list: DateOption[]) => void;
  isLayoutState: boolean;
  index: number;
  itemChoose: (item: DateOption) => void;
}) => {
  const onChooseDate = (item: DateOption) => {
    const newArray = listDate.map(p =>
      p.id === item.id ? {...p, isChoose: true} : {...p, isChoose: false},
    );
    onChangeList(newArray);
    itemChoose(item);
  };

  return (
    <TouchableOpacity
      style={
        isLayoutState
          ? {
              height: 32,
              borderRadius: 4,
              borderColor: item?.isChoose ? '#C9111F' : '#c1c1c1',
              borderWidth: 1,
              justifyContent: 'center',
              flex: 0.5,
              marginVertical: 4,
              marginLeft: index % 2 === 0 ? 0 : 10,
              alignItems: 'center',
            }
          : {
              height: 32,
              borderRadius: 4,
              borderColor: item?.isChoose ? '#C9111F' : '#c1c1c1',
              borderWidth: 1,
              justifyContent: 'center',
              flex: 0.33,
              marginVertical: 4,
              marginLeft: index % 3 === 0 ? 0 : 10,
              alignItems: 'center',
            }
      }
      onPress={() => onChooseDate(item)}>
      <Text
        style={{
          fontSize: 13,
          color: item?.isChoose ? '#C9111F' : '#8f8f8f',
        }}>
        {item.value}
      </Text>
    </TouchableOpacity>
  );
};

export default DateOptionItem;
