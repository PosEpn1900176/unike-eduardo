import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const LogoTitle = props => {
  return <Image style={styles.image} source={require('./logo.png')} />;
};

export { LogoTitle };
