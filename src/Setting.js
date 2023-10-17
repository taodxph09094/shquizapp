import {View, Text, StyleSheet, TouchableOpacity, Image,Platform} from 'react-native';
import React from 'react';
import AppLayout from './layout/AppLayout';
import RNExitApp from 'react-native-exit-app';


const Setting = ({navigation}) => {
 
  const handleExit =() => {
    RNExitApp.exitApp();
  }
  const backgroundSetting = require('./assets/image/bg_setting.png');
  // const returnIcon = require('./assets/image/returnIcon.png');
  // const about = require('./assets/image/about.png');
  // const exit = require('./assets/image/exit.png');
  return (
    <AppLayout bg={backgroundSetting}>
      <View style={styles.container}>
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.cardOption}
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.inButton}>
              {/* <Image source={returnIcon} style={{width: 80, height: 80, marginHorizontal: 20, marginLeft: -20}}></Image> */}
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 45,
                  color: '#5B1CAE',
                  fontWeight: 'bold',
                }}>
                Quay lại
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardOption}
            onPress={() => navigation.navigate('About')}>
            <View style={styles.inButton}>
              {/* <Image source={about} style={{width: 80, height: 80, marginHorizontal: 20, marginLeft: -20}}></Image> */}
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 45,
                  color: '#5B1CAE',
                  fontWeight: 'bold',
                }}>
                Giới thiệu
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardOption}
            onPress={handleExit}>
            <View style={styles.inButton}>
              {/* <Image source={exit} style={{width: 80, height: 80, marginHorizontal: 20, marginLeft: -20}}></Image> */}
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 45,
                  color: '#5B1CAE',
                  fontWeight: 'bold',
                }}>
                Thoát
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
};

export default Setting;
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
    alignItems: 'center',
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
  inButton: {
    marginHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
