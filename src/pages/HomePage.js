import React from "react";
import {
  Page,
  PageSection,
  Bullseye,
  Title,
  TextContent,
  Text,
  TextVariants,
} from "@patternfly/react-core";
import { ReactComponent as Scientist } from "../assets/scientist.svg";

const HomePage = () => {
  return (
    <Page>
      <div style={{ backgroundColor: "#ffffff", padding: "16px" }}>
        <Title headingLevel="h1" size="4xl" style={{ color: "#333333" }}>
          Demo dashboard
        </Title>
      </div>

      <PageSection>
        <Bullseye>
          <Scientist />
        </Bullseye>
      </PageSection>

      <PageSection>
        <TextContent>
          <Text component={TextVariants.small}>
            Image source:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Mad_scientist_transparent_background.svg">
              J.J. at the English-language Wikipedia
            </a>
            ,{" "}
            <a href="http://creativecommons.org/licenses/by-sa/3.0/">
              CC BY-SA 3.0
            </a>
            , via Wikimedia Commons{" "}
          </Text>
        </TextContent>
      </PageSection>
    </Page>
  );
};

export default HomePage;
