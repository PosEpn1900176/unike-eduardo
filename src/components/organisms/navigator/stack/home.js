import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { LoginPage } from '../../../pages/login';
import {
  MainPage,
  ScheduleServicesPage,
  AvailableServicesPage,
  ProfileUserPage,
  HelpPage,
  MapPage,
  ClientPage,
  AboutPage,
} from '../../../pages';
import { LogoTitle } from '../../../molecules';
// import { MainPage } from '../../../pages/main';
// import { ScheduleServicesPage } from '../../../pages/scheduleServices';
// import { AvailableServicesPage } from '../../../pages/availableServices';
// import { ClientPage } from '../../../pages/client';
// import { ProfileUserPage } from '../../../pages/profileUser';
// import { MapPage } from '../../../pages/map';
// import { HelpPage } from '../../../pages/help';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={MainPage}
        options={{
          headerTitle: 'Paine principal',
          headerRight: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="ScheduleServices"
        component={ScheduleServicesPage}
        options={{
          headerTitle: 'Serviços agendados',
          headerRight: () => <LogoTitle />,
        }}
      />

      <HomeStack.Screen
        name="AvailableServices"
        component={AvailableServicesPage}
        options={{
          headerTitle: 'Serviços disponíveis',
          headerRight: () => <LogoTitle />,
        }}
      />

      <HomeStack.Screen
        name="Client"
        component={ClientPage}
        options={{
          headerTitle: 'Dados do serviços',
          headerRight: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="ProfileUser"
        component={ProfileUserPage}
        options={{
          headerTitle: 'Perfil do profissional',
          headerRight: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapPage}
        options={{
          headerTitle: 'Localização em mapa',
          headerRight: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="Help"
        component={HelpPage}
        options={{
          headerTitle: 'Ajuda',
          headerRight: () => <LogoTitle />,
        }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutPage}
        options={{
          headerTitle: 'Sobre',
          headerRight: () => <LogoTitle />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
