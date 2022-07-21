import React, {
  forwardRef,
  memo,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  FlatList,
  LogBox,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DATA_DATE, DateOption} from '../models/DateModel';
import DateOptionItem from './DateOptionItem';

export const DATE_STATE: DateOption[] = [
  {
    id: 1,
    value: 'Tất cả',
    isChoose: true,
  },
  {
    id: 2,
    value: 'Thành công',
    isChoose: false,
  },
  {
    id: 3,
    value: 'Đã Huỷ',
    isChoose: false,
  },
  {
    id: 4,
    value: 'Chờ xử lý',
    isChoose: false,
  },
];

interface Props {
  isVisiblePopup?: boolean;
  setVisiblePopup?: (isVisible: boolean) => void;
}

export type PopupFilterRef = {
  showPopup?: () => void;
  hidePopup?: () => void;
  getDateItemChoose: () => DateOption;
};

const PopupFilter: React.FC<Props> = forwardRef(
  (props, ref: Ref<PopupFilterRef>) => {
    const {isVisiblePopup, setVisiblePopup} = props;
    const [listDate, setListDate] = useState<DateOption[]>(DATA_DATE);
    const [listState, setListState] = useState<DateOption[]>(DATE_STATE);
    const [showTT, setShowTT] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [itemChoose, setItemChoose] = useState<DateOption>({id: 1});
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);
    useImperativeHandle(ref, () => ({
      showPopup: () => {
        setShowModal(true);
      },
      hidePopup: () => {
        setShowModal(false);
      },
      getDateItemChoose: () => itemChoose,
    }));

    return (
      <SafeAreaView style={{width: '100%', height: '100%', flex: 1}}>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          {(() => {
            // console.log('RE-RENDER');
          })()}
          <View style={styles.main}>
            <View
              style={styles.top}
              onStartShouldSetResponder={e => true}
              onResponderStart={() => {
                setVisiblePopup && setVisiblePopup(!isVisiblePopup);
                setShowModal(!showModal);
              }}
            />

            <View style={styles.content}>
              <View style={styles.containerDivide}>
                <View style={styles.divide} />
              </View>

              <Text style={styles.txtFilter}>Bộ lọc</Text>
              <Text style={styles.txtTitle}>Theo thời điểm giao dịch</Text>
              <ScrollView
                style={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
                <FlatList
                  data={listDate}
                  renderItem={({item, index}) => (
                    <DateOptionItem
                      itemChoose={item => setItemChoose(item)}
                      isLayoutState={false}
                      listDate={listDate}
                      item={item}
                      onChangeList={setListDate}
                      index={index}
                    />
                  )}
                  //Setting the number of column
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                />
                <Text style={[styles.txtTitle, {marginTop: 10}]}>
                  Trạng thái
                </Text>
                <FlatList
                  data={listState}
                  renderItem={({item, index}) => (
                    <DateOptionItem
                      isLayoutState
                      listDate={listState}
                      item={item}
                      onChangeList={setListState}
                      index={index}
                    />
                  )}
                  //Setting the number of column
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                />

                <TouchableOpacity style={styles.btnApply}>
                  <Text style={styles.txtBtn}>Áp dụng</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => setShowTT(!showTT)}>
                  <Text style={[styles.txtBtn, {color: '#8f8f8f'}]}>
                    Xoá bộ lọc
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  },
);

export default PopupFilter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  top: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 0.4,
  },
  content: {
    flex: 0.6,
    marginTop: -20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  divide: {
    height: 5,
    width: 35,
    borderRadius: 2,
    backgroundColor: '#707070',
  },
  containerDivide: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  txtFilter: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  btnApply: {
    backgroundColor: '#c9111f',
    alignItems: 'center',
    height: 42,
    borderRadius: 6,
    marginTop: 16,
    justifyContent: 'center',
  },
  txtBtn: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  btnDelete: {
    backgroundColor: 'rgba(9, 30, 66, 0.04)',
    alignItems: 'center',
    height: 42,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
  },
});
