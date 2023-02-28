import React, { useState } from 'react';
//import './App.css';
import {Button, PanelMain, PanelMainBody, Panel} from '@patternfly/react-core';
import {Spinner} from '@patternfly/react-core';

function App() {

  function callApi() {
    alert('Button was pressed?');
    setLabelText('Hey!')
  }

  const BasicPanel = () => {
    return(
    <Panel>
      <PanelMain>
        <PanelMainBody>{labelText}</PanelMainBody>
      </PanelMain>
    </Panel>)
  };

  const [labelText, setLabelText] = useState('')

  return (
    <div id='test' className="App .pf-m-overpass-font">
      <header className="App-header">
        <Button variant="primary" onClick={callApi}> This is a test </Button>
        {<BasicPanel />}
      </header>
    </div>
  );
}

export default App;
