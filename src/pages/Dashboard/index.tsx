import React from 'react';

import { ContainerTimeSheets, ContainerEntries } from './styles';

import Header from '../../components/Header';
import Clocks from '../../components/Clocks';
import EntryCard from '../../components/EntryCard';

const Dashboard: React.FC = () => {

  return (
    <>
      <Header />
      <Clocks />
      <ContainerTimeSheets>
        <ContainerEntries>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </ContainerEntries>
      </ContainerTimeSheets>
    </>
  );
}

export default Dashboard;