import React, { useRef, useState } from "react";
import "../../assets/IndexPage.css";
import {
  Button,
  PanelMain,
  PanelMainBody,
  Panel,
  TextInput,
  Divider,
} from "@patternfly/react-core";

export default function IndexPage() {
  const inputRef = useRef(null);
  const [labelText, setLabelText] = useState("");

  function renderPanel() {
    //alert('Button was pressed?');
    setLabelText(inputRef.current.value);
  }

  const DividerUsingDiv = () => <Divider component="div" />;

  const BasicPanel = (props) => {
    return (
      <Panel variant="raised">
        <PanelMain>
          <PanelMainBody>{props.value}</PanelMainBody>
        </PanelMain>
      </Panel>
    );
  };

  const TextInputBasic = () => {
    const [textValue, setValue] = React.useState("");
    return (
      <div className="textInputDiv">
        <TextInput
          ref={inputRef}
          value={textValue}
          type="text"
          onChange={(textValue) => setValue(textValue)}
          aria-label="Text sample"
        />
      </div>
    );
  };

  return (
    <div className="App center">
      <header className="App-header">
        <TextInputBasic />
        <DividerUsingDiv />
        <Button variant="primary" onClick={renderPanel}>
          {" "}
          Render panel{" "}
        </Button>
        <DividerUsingDiv />
        <BasicPanel value={labelText} />
      </header>
    </div>
  );
}
