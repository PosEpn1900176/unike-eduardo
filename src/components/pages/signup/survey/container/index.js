import React from 'react';
import SignupSurveyPresentation from '../presentation';
import { useSetContactData } from '../../../../../hooks/useContactData';
import question from './data';
import { useSaveSignup } from '../../../../../hooks/useSave';
import { useNavigation } from '@react-navigation/native';

const SignupSurveyContainer = ({ navigation }) => {
  const { navigate } = useNavigation();
  const setKeyContact = useSetContactData();
  const [data, save] = useSaveSignup();
  const goPage = page => navigate(page);

  const onChange = key => value => setKeyContact(key, value);

  const onSave = () => {
    save();
  };

  return (
    <SignupSurveyPresentation
      data={question}
      onBack={() => goPage('SignupCategories')}
      onForward={() => goPage('SignupAuth')}
      onChange={onChange}
      onSave={onSave}
    />
  );
};

export default SignupSurveyContainer;
