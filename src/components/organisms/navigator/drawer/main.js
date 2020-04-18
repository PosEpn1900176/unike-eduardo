import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './comps/drawerContent';
import { Icon, Button } from 'native-base';
import styles from './comps/styles';

import {
  // MainPage,
  ScheduleServicesPage,
  AvailableServicesPage,
  ProfileUserPage,
  HelpPage,
  MapPage,
  ClientPage,
  AboutPage,
} from '../../../pages';
import { LogoTitle } from '../../../molecules';

const MainDrawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <MainDrawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(142,20,20,0.3)',
        activeTintColor: 'rgb(142,20,20)',
      }}>
      <MainDrawer.Screen
        name="AvailableServices"
        component={AvailableServicesPage}
      />
      <MainDrawer.Screen
        name="ScheduleServices"
        component={ScheduleServicesPage}
      />

      <MainDrawer.Screen
        name="Client"
        component={ClientPage}
        options={{
          headerTitle: 'Dados do serviços',
          headerRight: () => <LogoTitle />,
        }}
      />
      <MainDrawer.Screen
        name="ProfileUser"
        component={ProfileUserPage}
        options={{
          headerTitle: 'Perfil do profissional',
          headerRight: () => <LogoTitle />,
        }}
      />
      <MainDrawer.Screen
        name="Map"
        component={MapPage}
        options={{
          headerTitle: 'Localização em mapa',
          headerRight: () => <LogoTitle />,
        }}
      />

      <MainDrawer.Screen
        name="Help"
        component={HelpPage}
        options={{
          title: 'Ajuda',
          drawerIcon: () => (
            <Icon
              style={styles.icon}
              type="MaterialCommunityIcons"
              name="help-circle-outline"
            />
          ),
        }}
      />
      <MainDrawer.Screen
        name="About"
        component={AboutPage}
        options={{
          title: 'Sobre',
          drawerIcon: () => (
            <Icon
              style={styles.icon}
              type="MaterialCommunityIcons"
              name="doctor"
            />
          ),
        }}
      />
    </MainDrawer.Navigator>
  );
};

export default MainNavigator;
