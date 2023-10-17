import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AppLayout from './layout/AppLayout';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { data } from './constants/data/data';

const List = ({ navigation }) => {
  const backgroundSetting = require('./assets/image/bg_setting.png');
  const currentQuestionIndex = useSelector((state) => state.question.currentQuestionIndex);

  return (
    <AppLayout bg={backgroundSetting}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.card,
              index < currentQuestionIndex ? { opacity: 1 } : { opacity: 0.5 }, // Adjust opacity based on currentQuestionIndex
            ]}
            key={item.index}
            onPress={() => {
              navigation.navigate('Question', { index: item.index });
            }}
            disabled={index >= currentQuestionIndex} // Disable buttons for questions ahead of currentQuestionIndex
          >
            <Text style={{ color: '#5B1CAE', fontSize: 20, fontWeight: 'bold' }}>
              Cấp {item.index}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ position: 'relative', left: 30, bottom: 30 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: '#fff', padding: 10, width: 130, borderRadius: 20 }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
