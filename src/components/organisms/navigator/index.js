import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { SplashPage } from '../../pages/splash';
import { InitialPage } from '../../pages/initial';
import AuthNavigator from './stack/auth';
import SignupNavigator from './stack/signup';
import MainNavigator from './drawer/main';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import { LogoTitle } from '../../molecules';
import { Icon, Button } from 'native-base';

const NavigationStack = createStackNavigator();
const getNameIconMenu = open => {
  return open ? 'menu-unfold' : 'menu-fold';
};
const Comp = () => {
  const [toogle, setToogle] = useState(false);
  const navigation = useNavigation();
  const teste = () => {
    setToogle(!toogle);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Button transparent onPress={teste}>
      <Icon type="AntDesign" name={getNameIconMenu(toogle)} />
    </Button>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen
          name="Splash"
          mode="modal"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <NavigationStack.Screen
          name="Initial"
          mode="modal"
          component={InitialPage}
          options={{
            headerShown: false,
          }}
        />
        <NavigationStack.Screen
          name="Auth"
          mode="modal"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
        <NavigationStack.Screen
          name="Signup"
          mode="modal"
          component={SignupNavigator}
        />
        <NavigationStack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerTitle: () => <LogoTitle />,
            headerLeft: props => {
              console.log('PROPS', props);
              return <Comp />;
            },
          }}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
