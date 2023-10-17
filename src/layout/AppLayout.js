import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';

const AppLayout = ({children, bg, bgQ}) => {
  const backgroungDefautl = require('./../assets/image/background.png');
  return (
    <View style={styles.appLayoutStyles}>
      <ImageBackground
        source={bg ? bg : bgQ ? bgQ : backgroungDefautl}
        style={
          bg
            ? styles.backgroundImageCustom
            : bgQ
            ? styles.backgroundImageQ
            : styles.backgroundImage
        }>
        {children}
      </ImageBackground>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  appLayoutStyles: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    height: '60%',
  },
  backgroundImageCustom: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImageQ: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    height: '52%',
  },
});
