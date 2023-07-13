import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  PageSection,
  Icon,
  Alert,
  AlertActionCloseButton,
  Spinner,
  Divider,
  Title,
  TitleSizes,
} from "@patternfly/react-core";

import CustomButton from "../components/CustomButton";

import ExclamationTriangleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon";
import CheckCircleIcon from "@patternfly/react-icons/dist/esm/icons/check-circle-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import ExternalLinkSquareAltIcon from "@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon";

const AAPPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const controllerProxyURL =
    process.env.controller_proxy_url || "http://localhost:8080/ansible/";
  const controllerURL =
    process.env.controller_url || "https://controller.rh-lab.labs/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${controllerProxyURL}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        const updatedItems = await Promise.all(
          data.map(async (item) => {
            const getResponse = await fetch(
              `${controllerProxyURL}/launch/${item.id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const { can_start_without_user_input } = await getResponse.json();
            return {
              ...item,
              can_start_without_user_input,
            };
          })
        );
        setItems(updatedItems);
        setIsLoading(false);
        console.log(updatedItems);
      } catch (error) {
        console.error("Error fetching dropdown content:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Render the page every 5 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const getStatusIcon = (status) => {
    const statusIcons = {
      successful: (
        <Icon status="success">
          <CheckCircleIcon />
        </Icon>
      ),
      failed: (
        <Icon status="danger">
          <ExclamationCircleIcon />
        </Icon>
      ),
      default: (
        <Icon status="warning">
          <ExclamationTriangleIcon />
        </Icon>
      ),
    };

    return statusIcons[status] || statusIcons.default;
  };

  const hasInputRequiredTemplates = items.some(
    (item) => !item.can_start_without_user_input
  );

  const filteredTemplates = (isAvailable) =>
    items.filter((item) => item.can_start_without_user_input === isAvailable);

  const [showAlert, setShowAlert] = useState(true);

  const onCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <>
      {hasInputRequiredTemplates && showAlert && (
        <Alert
          variant="warning"
          title="One or more templates require manual input to start"
          actionClose={
            <AlertActionCloseButton
              aria-label="Close alert"
              onClose={onCloseAlert}
            />
          }
        />
      )}
      <PageSection isFilled={true}>
        <Grid hasGutter>
          {isLoading ? (
            <GridItem span={12} align="center">
              <Spinner size="xl" />
            </GridItem>
          ) : (
            <>
              <Divider component="div" />
              <Title headingLevel="h1" size={TitleSizes["4xl"]}>
                Available Templates{" "}
                <Button
                  variant="link"
                  component="a"
                  href={`${controllerURL}`}
                  target="_blank"
                  icon={<ExternalLinkSquareAltIcon />}
                  iconPosition="right"
                >
                  Open AAP Controller
                </Button>
              </Title>
              <Grid hasGutter>
                {filteredTemplates(true).map((item) => (
                  <GridItem span={3} key={item.id}>
                    <Card>
                      <CardTitle>{item.name}</CardTitle>
                      <CardBody>
                        <Flex>
                          <FlexItem>Last execution status:</FlexItem>
                          <FlexItem>{getStatusIcon(item.status)}</FlexItem>
                        </Flex>
                      </CardBody>
                      <CardFooter>
                        <Flex>
                          <FlexItem>
                            <CustomButton
                              buttonText="Launch Template"
                              endpoint={`${controllerProxyURL}/launch/${item.id}`}
                              method="POST"
                              onFetchResult={() => {}}
                              isDisabled={!item.can_start_without_user_input}
                            />
                          </FlexItem>
                          {!item.can_start_without_user_input && (
                            <FlexItem>
                              <Button
                                variant="link"
                                component="a"
                                href={`${controllerURL}/#/templates/job_template/${item.id}/details`}
                                target="_blank"
                                icon={<ExternalLinkSquareAltIcon />}
                                iconPosition="right"
                              >
                                View in AAP Controller
                              </Button>
                            </FlexItem>
                          )}
                        </Flex>
                      </CardFooter>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
              <Divider component="div" />
              <Title headingLevel="h1" size={TitleSizes["4xl"]}>
                Unavailable Templates
              </Title>
              <Grid hasGutter>
                {filteredTemplates(false).map((item) => (
                  <GridItem span={3} key={item.id}>
                    <Card>
                      <CardTitle>{item.name}</CardTitle>
                      <CardBody>
                        <Flex>
                          <FlexItem>Last execution status:</FlexItem>
                          <FlexItem>{getStatusIcon(item.status)}</FlexItem>
                        </Flex>
                      </CardBody>
                      <CardFooter>
                        <Flex>
                          <FlexItem>
                            <CustomButton
                              buttonText="Launch Template"
                              endpoint={`${controllerProxyURL}/launch/${item.id}`}
                              method="POST"
                              onFetchResult={() => {}}
                              isDisabled={!item.can_start_without_user_input}
                            />
                          </FlexItem>
                          {!item.can_start_without_user_input && (
                            <FlexItem>
                              <Button
                                variant="link"
                                component="a"
                                href={`${controllerURL}/#/templates/job_template/${item.id}/details`}
                                target="_blank"
                                icon={<ExternalLinkSquareAltIcon />}
                                iconPosition="right"
                              >
                                View in AAP Controller
                              </Button>
                            </FlexItem>
                          )}
                        </Flex>
                      </CardFooter>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </PageSection>
    </>
  );
};

export default AAPPage;
