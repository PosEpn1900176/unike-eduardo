import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignupContactData,
  SignupCategories,
  SignupProfessional,
  SignupLocalization,
  SignupSurvey,
  SignupAuth,
} from '../../../pages/signup';
import { LogoTitle } from '../../../molecules';

const SignupStack = createStackNavigator();

const SignupNavigator = () => {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="SignupContactData"
        component={SignupContactData}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <LogoTitle />,
        }}
      />
      <SignupStack.Screen
        name="SignupProfessional"
        component={SignupProfessional}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <LogoTitle />,
        }}
      />
      <SignupStack.Screen
        name="SignupCategories"
        component={SignupCategories}
        options={{
          headerTitle: 'Dados da categoria',
          headerRight: () => <LogoTitle />,
        }}
      />
      <SignupStack.Screen
        name="SignupLocalization"
        component={SignupLocalization}
        options={{
          headerTitle: 'Localização',
          headerRight: () => <LogoTitle />,
        }}
      />
      <SignupStack.Screen
        name="SignupSurvey"
        component={SignupSurvey}
        options={{
          headerTitle: 'Questões',
          headerRight: () => <LogoTitle />,
        }}
      />
      <SignupStack.Screen
        name="SignupAuth"
        component={SignupAuth}
        options={{
          headerTitle: 'Dados para autenticação',
          headerRight: () => <LogoTitle />,
        }}
      />
    </SignupStack.Navigator>
  );
};

export default SignupNavigator;
