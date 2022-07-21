import {useNavigation} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import PopupDemo from '../components/PopupDemo';
import {DATA_DATE} from '../models/DateModel';
import {HomeRespond} from '../models/User';
import HomeApi from '../services/homeApi/homeApi';
import {useLoginStore} from '../store/login/loginStore';
import ItemView from './Item';

const Home = () => {
  const navigation = useNavigation();
  const homeApi = useRef(new HomeApi());
  const [data] = useLoginStore();
  const [textInput, setTextInput] = useState('');
  const [homeRespond, setHomeRespond] = useState<HomeRespond[] | null>([]);
  useEffect(() => {
    getDataFromApi();
  }, []);
  const getDataFromApi = async () => {
    const dataFromWS = await homeApi?.current?.getDataFromHome();
    setHomeRespond(dataFromWS);
  };

  return (
    <View>
      <Text>
        User "{data?.user?.username}" and Password is "{data?.user?.password}"
      </Text>

      <TextInput onChangeText={text => setTextInput(text)} />
      <Text>{textInput}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate('Detail' as never, undefined as never)
        }>
        <Text style={{color: '#fff'}}>Show</Text>
      </TouchableOpacity>

      <FlatList
        data={homeRespond}
        renderItem={({item}) => <ItemView itemData={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* <PopupDemo isVisiblePopup={visible} setVisiblePopup={setVisiblePopup} /> */}
    </View>
  );
};
export default Home;

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
