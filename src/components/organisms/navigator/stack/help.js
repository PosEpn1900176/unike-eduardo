import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HelpPage } from '../../../pages/help';

const HelpStack = createStackNavigator();

const HelpNavigator = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="Help"
        component={HelpPage}
        options={{
          headerShown: false,
        }}
      />
    </HelpStack.Navigator>
  );
};

export default HelpNavigator;
