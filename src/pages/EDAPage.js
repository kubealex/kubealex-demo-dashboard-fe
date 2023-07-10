import React from 'react';
import { Button, PageSection, Grid, GridItem, Card, CardTitle, CardFooter, CardBody } from '@patternfly/react-core';

const EDAPage = () => {

  return (
    <PageSection>

      <Grid hasGutter span={3}>
        <GridItem>
          <Card>
            <CardTitle>Kafka Integration</CardTitle>
            <CardBody>This integration sends a kafka event to a topic monitored by EDA</CardBody>
            <CardFooter>
              <Button>Send Request</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardTitle>Webhook Integration</CardTitle>
            <CardBody>This integration calls an EDA controlled webhook</CardBody>
            <CardFooter>
              <Button>Send Request</Button>
            </CardFooter>
            </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardTitle>AlertManager Integration</CardTitle>
              <CardBody>This integration sends an alert to an AlertmManager instance monitored by EDA</CardBody>
              <CardFooter>
                <Button>Send Request</Button>
              </CardFooter>
              </Card>
        </GridItem>
      </Grid>

    </PageSection>
  );
};

export default EDAPage;
