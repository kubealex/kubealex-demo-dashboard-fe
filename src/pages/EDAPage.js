import React, { useState } from "react";
import {
  Icon,
  Button,
  PageSection,
  Grid,
  GridItem,
  Card,
  CardTitle,
  CardFooter,
  CardBody,
  FlexItem,
  Flex,
  Divider,
  Title,
  TitleSizes,
} from "@patternfly/react-core";

import CheckCircleIcon from "@patternfly/react-icons/dist/esm/icons/check-circle-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import ExternalLinkSquareAltIcon from "@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon";

import CustomButton from "../components/CustomButton";

const EDAPage = () => {
  const [fetchResults, setFetchResults] = useState({});
  const edaControllerURL =
    process.env.eda_controller_url || "https://eda.rh-lab.labs/";
  const handleFetchResult = (id) => (result) => {
    setFetchResults((prevResults) => ({
      ...prevResults,
      [id]: result,
    }));
  };

  const renderStatusIcon = (id) => {
    const result = fetchResults[id];
    if (result) {
      const IconComponent = result.success
        ? CheckCircleIcon
        : ExclamationCircleIcon;
      return (
        <Icon status={result.success ? "success" : "danger"}>
          <IconComponent />
        </Icon>
      );
    }
    return null;
  };

  const cardData = [
    {
      id: "kafka",
      title: "Kafka Integration",
      body: "This integration sends a kafka event to a topic monitored by EDA to trigger automation",
      endpoint: "http://localhost:8080/kafka/",
    },
    {
      id: "webhook",
      title: "Webhook Integration",
      body: "This integration triggers an EDA controlled webhook to execute automation",
      endpoint: "http://localhost:8080/webhook/",
    },
    {
      id: "alertmanager",
      title: "AlertManager Integration",
      body: "This integration sends an alert to an AlertManager instance monitored by EDA",
      endpoint: "http://localhost:8080/alertmanager/",
    },
    {
      id: "mqtt",
      title: "MQTT Integration",
      body: "This integration sends an event to a Mostquitto instance monitored by EDA",
      endpoint: "http://localhost:8080/mqtt/",
    },
  ];

  return (
    <PageSection isFilled={true}>
      <Grid hasGutter>
        <Divider component="div" />
        <Title headingLevel="h1" size={TitleSizes["4xl"]}>
          Available Integrations
          <Button
            variant="link"
            component="a"
            href={`${edaControllerURL}`}
            target="_blank"
            icon={<ExternalLinkSquareAltIcon />}
            iconPosition="right"
          >
            Open EDA Controller
          </Button>
        </Title>

        {cardData.map(({ id, title, body, endpoint }) => (
          <GridItem span={3} key={id}>
            <Card>
              <CardTitle>{title}</CardTitle>
              <CardBody>{body}</CardBody>
              <CardFooter>
                <Flex>
                  <FlexItem>
                    <CustomButton
                      buttonText="Generate Event"
                      endpoint={endpoint}
                      onFetchResult={handleFetchResult(id)}
                    ></CustomButton>
                  </FlexItem>
                  <FlexItem>{renderStatusIcon(id)}</FlexItem>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </PageSection>
  );
};

export default EDAPage;
