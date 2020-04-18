import React from 'react';
import ScheduleServicesPagePresentation from '../presentation';
import { ServicesData } from './data';

const ScheduleServicesPageContainer = props => (
  <ScheduleServicesPagePresentation data={ServicesData} {...props} />
);

export default ScheduleServicesPageContainer;
