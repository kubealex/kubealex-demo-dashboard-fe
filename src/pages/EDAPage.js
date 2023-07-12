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
} from "@patternfly/react-core";

import CheckCircleIcon from "@patternfly/react-icons/dist/esm/icons/check-circle-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import ArrowRightIcon from "@patternfly/react-icons/dist/esm/icons/arrow-right-icon";

import CustomButton from "../components/CustomButton";

const EDAPage = () => {
  const [fetchResults, setFetchResults] = useState({});

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
      body: "This integration sends a kafka event to a topic monitored by EDA",
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
  ];

  return (
    <PageSection isFilled={true}>
      <Grid hasGutter span={3}>
        {cardData.map(({ id, title, body, endpoint }) => (
          <GridItem key={id}>
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
        <GridItem>
          <Card>
            <CardBody>
              <div>
                <Button
                  variant="link"
                  isLarge
                  component="a"
                  href={
                    process.env.aap_controller ||
                    "https://controller.rh-lab.labs"
                  }
                  target="_blank"
                >
                  Go to Automation Controller <ArrowRightIcon />
                </Button>
              </div>
              <br />
              <div>
                <Button
                  variant="link"
                  isLarge
                  component="a"
                  href={process.env.eda_controller || "https://eda.rh-lab.labs"}
                  target="_blank"
                >
                  Go to EDA Controller <ArrowRightIcon />
                </Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </PageSection>
  );
};

export default EDAPage;
