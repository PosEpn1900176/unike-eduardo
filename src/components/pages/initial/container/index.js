import React from 'react';
import InitialPresentation from '../presentation';

const InitialContainer = ({ navigation }) => {
  const onGoSignIn = () => navigation.navigate('Auth');
  const onGoSignUp = () =>
    navigation.navigate('Signup', { screen: 'SignupContactData' });

  return (
    <InitialPresentation onGoSignUp={onGoSignUp} onGoSignIn={onGoSignIn} />
  );
};

export default InitialContainer;
