import React from 'react';
import AlertPresentation from '../presentation';
import { useNavigation } from '@react-navigation/native';

const AlertContainer = props => {
  const { navigate } = useNavigation();

  const onClose = () => {
    navigate('Home');
  };
  return <AlertPresentation {...props} onClose={onClose} />;
};

export default AlertContainer;
