import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../../../pages/login';
import { MainPage } from '../../../pages/main';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        mode="modal"
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Services"
        component={MainPage}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
