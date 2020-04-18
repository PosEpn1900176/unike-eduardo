import React from 'react';
import SignupContactDataPresentation from '../presentation';
import { useSelector } from 'react-redux';
import {
  useSetContactData,
  useDisabledSignup,
} from '../../../../../hooks/useContactData';
// import { Text } from 'react-native';

// const SignupContactDataContainer = () => (
//   <Text>SignupContactDataContainer</Text>
// );
const SignupContactDataContainer = ({ navigation }) => {
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();
  const isDisabled = useDisabledSignup(['Email', 'Telefone']);

  const goPage = page => navigation.navigate(page);
  const onChange = key => value => setKeyContact(key, value);

  return (
    <SignupContactDataPresentation
      title="Dados de Contato"
      disabled={isDisabled}
      onChangeForm={onChange}
      data={selector}
      onBack={() => goPage('Login')}
      onForward={() => goPage('SignupProfessional')}
      onClear={() => {}}
    />
  );
};

export default SignupContactDataContainer;
