import React from 'react';
import ProfileUserPagePresentation from '../presentation';
import { useNavigation } from '@react-navigation/native';

const ProfileUserPageContainer = props => {
  const { navigate } = useNavigation();

  const onBack = () => {
    navigate('Home');
  };

  return <ProfileUserPagePresentation onBack={onBack} />;
};

export default ProfileUserPageContainer;
