import React, { useState } from "react";
import "../../assets/RestPage.css";
import {
  Button,
  PanelMain,
  PanelMainBody,
  Panel,
  Divider,
} from "@patternfly/react-core";

export default function IndexPage() {
  //const [labelText, setLabelText] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async () => {
    try {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setPosts(data);
  } finally {
  setIsLoading(false);
}
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

  console.log(posts);

  return (
    <div className="App center">
      <header className="App-header">
        <DividerUsingDiv />
        <Button variant="primary" onClick={fetchData}>
          {isLoading ? "Loading..." : "Render panel"}
        </Button>
        <DividerUsingDiv />
        {posts.map((post) => {
          return <BasicPanel value={post.userId} />
        }
        )}
      </header>
    </div>
  );
}
