import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutPage } from '../../../pages/about';
import { LogoTitle } from '../../../molecules';

const AboutStack = createStackNavigator();

const AboutNavigator = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        component={AboutPage}
        options={{
          headerTitle: 'Sobre',
          headerRight: () => <LogoTitle />,
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutNavigator;
