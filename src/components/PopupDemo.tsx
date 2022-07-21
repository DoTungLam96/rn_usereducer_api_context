/* eslint-disable react-native/no-inline-styles */
import React, {memo, useContext} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginContext} from '../store/loginContext';

interface Props {
  isVisiblePopup?: boolean;
  setVisiblePopup?: (isVisible: boolean) => void;
  usename?: string;
  password?: string;
  changeUsername?: (username?: string) => void;
}

const PopupFilter = ({isVisiblePopup, setVisiblePopup}: Props) => {
  const {setUser, user} = useContext(LoginContext);
  return (
    <SafeAreaView style={{width: '100%', height: '100%', flex: 1}}>
      <Modal animationType="slide" transparent={true} visible={isVisiblePopup}>
        {(() => {
          // console.log('RE-RENDER-POPUP-DEMO');
        })()}
        <View style={styles.main}>
          <View
            style={styles.top}
            onStartShouldSetResponder={() => true}
            onResponderStart={() => {
              setVisiblePopup && setVisiblePopup(!isVisiblePopup);
            }}
          />

          <View style={styles.content}>
            <Text style={styles.txtFilter}>Popup demo</Text>
            <Text style={{marginVertical: 10}}>{user?.name}</Text>

            <View
              style={{
                marginTop: 16,
                height: 45,
                borderRadius: 8,
                borderColor: '#cdcdcd',
                borderWidth: 1,
                paddingLeft: 8,
              }}>
              <TextInput
                onChangeText={text =>
                  setUser &&
                  setUser({
                    name: text,
                    password: 'Test',
                  })
                }
                style={{flex: 1}}
                placeholder="change username here..."
              />
            </View>

            <TouchableOpacity
              onPress={() =>
                setVisiblePopup && setVisiblePopup(!isVisiblePopup)
              }
              style={{
                height: 40,
                marginTop: 22,
                backgroundColor: '#c98',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text>Change user</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default memo(PopupFilter);

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
