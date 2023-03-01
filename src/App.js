import React, { useRef, useState } from 'react';
import './App.css';
import {Button, PanelMain, PanelMainBody, Panel, TextInput} from '@patternfly/react-core';

function App() {

  const inputRef = useRef(null)
  const [labelText, setLabelText] = useState('')

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
    const [textValue, setValue] = React.useState('');
    return(
    <div style={{width:300+'px'}} >
    <TextInput ref={inputRef} value={textValue} type="text" onChange={textValue => setValue(textValue)} aria-label="Text sample" />
    </div>
    )
  };

  return (
    <div className="App center">
      <header className="App-header">
        <TextInputBasic />
        <Button variant="primary" onClick={renderPanel}> Render panel </Button>
        <BasicPanel value={labelText}/>
      </header>
    </div>
  );
}

export default App;
