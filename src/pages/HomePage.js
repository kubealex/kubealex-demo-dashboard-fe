import React from "react";
import {
  PageSection,
  Title,
  Bullseye,
  Page,
  PageHeader,
} from "@patternfly/react-core";
import { ReactComponent as Scientist } from "../assets/scientist.svg";
const HomePage = () => {
  return (
    <Page>
      <PageSection>
        <Bullseye>
          <Scientist />
        </Bullseye>
      </PageSection>

      <PageSection>
        <a href="https://commons.wikimedia.org/wiki/File:Mad_scientist_transparent_background.svg">
          J.J. at the English-language Wikipedia
        </a>
        ,{" "}
        <a href="http://creativecommons.org/licenses/by-sa/3.0/">
          CC BY-SA 3.0
        </a>
        , via Wikimedia Commons{" "}
      </PageSection>
    </Page>
  );
};

export default HomePage;
