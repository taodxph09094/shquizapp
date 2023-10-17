import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppLayout from './layout/AppLayout';
import { data } from './constants/data/data';

const Correct = ({navigation, route}) => {
  const backgroundSetting = require('./assets/image/result.png');
  const {index} = route?.params;
  const [checkEnd, setCheckEnd] = useState(false);
  const handleBack =() => {
    navigation.navigate('Home');
  }
  const handleNext =() => {
    navigation.navigate('Question', {index: index+1});
  }

  useEffect(() => {
     if (index + 1 >= data.length) {
    setCheckEnd(true);
  }
  }, [index, data])
  
  return (
    <AppLayout bg={backgroundSetting}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {checkEnd ?
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Chúc mừng bạn đã hoàn tất bộ câu hỏi!
            </Text>
              <TouchableOpacity onPress={handleBack} style={{backgroundColor: '#FF735C', width: 120, height: 45, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginVertical: 5}}>
                <Text>Thoát</Text>
              </TouchableOpacity>
          </View>
             : <View
          style={{
            width: 300,
            height: 240,
            backgroundColor: '#ECECEC',
            borderRadius: 20,
          }}>
          <View>
            <Text
              style={{
                color: '#5B1CAE',
                fontSize: 45,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Chính xác!
            </Text>
            <Image style={{alignSelf: 'center', width: 100, height: 100}} source={require('./assets/image/verify.png')} />
          </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 20}}>
            <TouchableOpacity onPress={handleBack} style={{backgroundColor: '#385A64', width: 120, height: 60,height: 45, borderRadius: 20, alignItems: 'center', justifyContent: 'center',marginVertical: 5}}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Thoát</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext} style={{backgroundColor: '#FF735C', width: 120, height: 45, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginVertical: 5}}>
                  <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Tiếp tục </Text>
                </TouchableOpacity>
            </View>
        </View>}
        
      </View>
    </AppLayout>
  );
};

export default Correct;
