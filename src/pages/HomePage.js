import React from 'react';
import { PageSection, Title, Bullseye } from '@patternfly/react-core';
import { ReactComponent as Scientist } from '../assets/scientist.svg'
const HomePage = () => {

  return (
    <PageSection>
      <Title headingLevel="h1">Welcome to this simple dashboard for testing</Title>
      <Bullseye>
    <div><Scientist /></div>
  </Bullseye>

    </PageSection>
  );
};

export default HomePage;
