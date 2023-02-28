import React, { useState } from 'react';
//import './App.css';
import {Button, PanelMain, PanelMainBody, Panel, TextInput, Spinner} from '@patternfly/react-core';

function App() {

  function renderPanel() {
    //alert('Button was pressed?');
    setLabel("Hey there")
  }

  function setLabel(message) {
  setLabelText(message)
}

  const BasicPanel = () => {
    return(
    <Panel>
      <PanelMain>
        <PanelMainBody>{labelText}</PanelMainBody>
      </PanelMain>
    </Panel>)
  };

  const TextInputBasic = () => {
    const [value, setValue] = React.useState('');
    return <TextInput value={value} type="text" onChange={value => setValue(value)} aria-label="text input example" />;
  };

  const [labelText, setLabelText] = useState('')

  return (
    <div id='test' className="App .pf-m-overpass-font">
      <header className="App-header">
        <Button variant="primary" onClick={renderPanel}> Render panel </Button>
        {<BasicPanel />}
        {<TextInputBasic />}
      </header>
    </div>
  );
}

export default App;
