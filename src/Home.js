import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AppLayout from './layout/AppLayout';

const Home = ({navigation}) => {
  const play = require('./assets/image/play.png');
  const list = require('./assets/image/list.png');
  const setting = require('./assets/image/setting.png');
  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.list}>
          <TouchableOpacity style={styles.cardOption} onPress={() => navigation.navigate('Question', {layout: 'Home'})}>
            <View style={styles.inButton}>
              <Image source={play} style={{width: 80, height: 80, marginHorizontal: 20, marginLeft: -20}}></Image>
              <Text style={{marginHorizontal: 20, fontSize: 45,  color: '#5B1CAE', fontWeight: 'bold'}}>Chơi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardOption} onPress={() => navigation.navigate('List')}>
          <View style={styles.inButton}>
            <Image source={list} style={{width: 80, height: 80, marginHorizontal: 20, marginLeft: -20}}></Image>
            <Text style={{marginHorizontal: 20,fontSize: 45,color: '#5B1CAE', fontWeight: 'bold'}}>Cấp độ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardOption} onPress={() => navigation.navigate('Setting')}>
          <View style={styles.inButton}>
            <Image source={setting} style={{width: 80, height: 80, marginLeft: 20}}></Image>
            <Text style={{marginHorizontal: 20, fontSize: 45,  color: '#5B1CAE', fontWeight: 'bold'}}>Cài đặt</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    transform: [{translateY: 160}],
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // Để list căn giữa the theo chiều ngang
    alignItems: 'center', // Để các cardOption căn giữa theo chiều ngang
  },
  cardOption: {
    width: 320,
    height: 140,
    marginBottom: 20, // Để tạo khoảng cách giữa các cardOption
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  inButton:{
    marginHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
