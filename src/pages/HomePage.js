import React from 'react';
import { PageSection, Title, Bullseye } from '@patternfly/react-core';
import { ReactComponent as Scientist } from '../assets/scientist.svg'
const HomePage = () => {

  return (
    <PageSection>
      <Title headingLevel="h1">Welcome to this simple dashboard for testing</Title>
      <Bullseye>
          <div><Scientist /></div>
          <a href="https://commons.wikimedia.org/wiki/File:Mad_scientist_transparent_background.svg">J.J. at the English-language Wikipedia</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
      </Bullseye>
    </PageSection>
  );
};

export default HomePage;
