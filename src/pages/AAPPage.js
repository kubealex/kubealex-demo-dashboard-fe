import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  PageSection,
} from "@patternfly/react-core";

import CustomButton from "../components/CustomButton";

const AAPPage = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const controllerURL =
    process.env.controller_url || "http://localhost:8080/ansible/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${controllerURL}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching dropdown content:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id, name) => {
    setSelectedItem({ id, name });
  };

  return (
    <PageSection isFilled={true}>
      <Grid hasGutter>
        {items.map((item) => (
          <GridItem span={3} key={item.id}>
            <Card onClick={() => handleCardClick(item.id, item.name)}>
              <CardTitle>{item.name}</CardTitle>
              <CardBody>{item.id}</CardBody>
              <CardFooter>
                <CustomButton
                  buttonText="Launch Template"
                  endpoint={`${controllerURL}/api/v2/job_templates/${item.id}/launch`}
                  method="GET"
                  onFetchResult={() => {}}
                />
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </PageSection>
  );
};

export default AAPPage;
