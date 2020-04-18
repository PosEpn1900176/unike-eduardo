import React from 'react';
import { HeaderSignup } from '../../../templates/headerSignup';
import { ScheduleServices } from '../../../templates/scheduleServices';
import {
  Container,
  Tabs,
  Tab,
  Footer,
  Left,
  Button,
  Icon,
  Text,
  ScrollableTab,
} from 'native-base';

const ScheduleServicesPagePresentation = props => {
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {props.data.map((service, index) => (
          <Tab key={index} heading={service.text}>
            <ScheduleServices {...props} status={service.id} />
          </Tab>
        ))}
      </Tabs>

      <Footer>
        <Left>
          <Button transparent onPress={onBack}>
            <Icon active name="arrow-back" />
            <Text>Voltar</Text>
          </Button>
        </Left>
      </Footer>
    </Container>
  );
};

export default ScheduleServicesPagePresentation;
