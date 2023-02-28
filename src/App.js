import React, { useRef, useState } from 'react';
//import './App.css';
import {Button, PanelMain, PanelMainBody, Panel, TextInput} from '@patternfly/react-core';

function App() {

  const inputRef = useRef(null)

  function renderPanel() {
    //alert('Button was pressed?');
    setLabelText(inputRef.current.value)
  }

  const BasicPanel = (props) => {
    return(
    <Panel>
      <PanelMain>
        <PanelMainBody>{props.value}</PanelMainBody>
      </PanelMain>
    </Panel>)
  };

  const TextInputBasic = () => {
    const [value, setValue] = React.useState('');
    return(
    <div style={{width:300+'px'}} >
    <TextInput ref={inputRef} value={value} type="text" onChange={value => setValue(value)} aria-label="text input example" />
    </div>
    )
  };

  const [labelText, setLabelText] = useState('')

  return (
    <div id='test' className="App .pf-m-overpass-font">
      <header className="App-header">
        <Button variant="primary" onClick={renderPanel}> Render panel </Button>
        <BasicPanel value={labelText}/>
        {<TextInputBasic />}
      </header>
    </div>
  );
}

export default App;
