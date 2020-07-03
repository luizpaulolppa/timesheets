import React from 'react';

import {} from './styles';

import Header from '../../components/Header';
import Clocks from '../../components/Clocks';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header />
      <Clocks />
      <h1>Dashboard!!!</h1>
    </>
  );
}

export default Dashboard;