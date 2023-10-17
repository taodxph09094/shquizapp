import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppLayout from './layout/AppLayout';
import {data} from './constants/data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestion } from './redux/questionActions';

const Question = ({navigation, route}) => {
  const currentQuestionIndex = useSelector((state) => state.question.currentQuestionIndex);
  console.log(currentQuestionIndex, 's')
  const dispatch = useDispatch();
  const [index, setIndex]= useState();
  console.log(route.params)
  useEffect(() => {
    if(route?.params?.layout === 'Home'){
      setIndex(currentQuestionIndex)
    }else{
      setIndex(route?.params?.index)
    }
  },[route?.params])

  const selectedItem = data?.find(item => item.index === index);
  const backgroundSetting = require('./assets/image/bg_question.png');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerSelect = index => {
    setSelectedAnswer(index);
  };
  const onBack = () => {
    navigation.goBack();
  };
  const checkCorrect = () => {
    if(selectedAnswer+1 === selectedItem?.isCorrect) {
      navigation.navigate("Correct", {index: index});
      dispatch(setCurrentQuestion(currentQuestionIndex + 1))
    }else{
      navigation.navigate("False", {index: index});
    }
  }

  return (
    <AppLayout bgQ={backgroundSetting}>
      <View style={styles.titleQ}>
        <Text style={{color: '#5B1CAE', fontSize: 35, fontWeight: 'bold'}}>
          Câu {index}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.question}>
          <Text style={{color: '#5B1CAE', fontSize: 25, fontWeight: 'bold', maxWidth: 340}}>
            {selectedItem?.title}
          </Text>
        </View>
        <View style={styles.listCorrect}>
          {selectedItem?.correct.map((item, itemIndex) => (
            <TouchableOpacity
              style={[
                styles.itemCorrect,
                selectedAnswer === itemIndex ? {borderColor: 'red'} : null,
              ]}
              key={item.key}
              onPress={() => handleAnswerSelect(itemIndex)}>
              <Text
                style={{color: '#5B1CAE', fontSize: 25, fontWeight: 'bold'}}>
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.formButton}>
        <TouchableOpacity onPress={onBack} style={styles.buttonNext}>
          <Text style={styles.textBtn}>Quay lại</Text>
        </TouchableOpacity>

        {selectedAnswer !== null ? (
          <TouchableOpacity style={styles.buttonCancel} onPress={checkCorrect}>
            <Text style={styles.textBtn}>Tiếp theo</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      
    </AppLayout>
  );
};

export default Question;

const styles = StyleSheet.create({
  titleQ: {
    position: 'absolute',
    top: 120,
    left: 45,
  },
  question: {
    maxWidth: 400,
    minHeight: 120,
    backgroundColor: '#fff',
    borderRadius: 20,
    transform: [{translateY: 40}],
    padding: 20,
  },
  listCorrect: {
    flexDirection: 'column',
    alignItems: 'center',
    transform: [{translateY: 100}],
  },
  itemCorrect: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#5B1CAE',
    borderWidth: 2,
    marginVertical: 10,
  },
  formButton: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: [{translateY: -60}],
  },
  buttonNext: {
    width: 125,
    height: 60,
    backgroundColor: '#5B1CAE',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    width: 125,
    height: 60,
    backgroundColor: '#FF735C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
