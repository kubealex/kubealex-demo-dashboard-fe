import React from "react";
import {
  Page,
  PageSection,
  Flex,
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
      <Flex style={{ backgroundColor: "#ffffff", padding: "16px" }}>
        <Title headingLevel="h1" size="lg" variant="primary">
          Demo dashboard
        </Title>
      </Flex>

      <PageSection layout="card" spacing="md">
        <Bullseye>
          <Scientist />
        </Bullseye>
      </PageSection>

      <PageSection>
        <TextContent>
          <Text component={TextVariants.paragraph}>
            Image source:{" "}
            <a
              component={TextVariants.link}
              href="https://commons.wikimedia.org/wiki/File:Mad_scientist_transparent_background.svg"
            >
              J.J. at the English-language Wikipedia
            </a>
            ,{" "}
            <a
              component={TextVariants.link}
              href="http://creativecommons.org/licenses/by-sa/3.0/"
            >
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
