import React, { useEffect, useState } from 'react';
import { PageSection, Title, Spinner } from '@patternfly/react-core';

const RestPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/rest-data');
        const data = await response.json();
        setResponseData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PageSection>
      <Title headingLevel="h1">REST Page</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {responseData ? (
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
    </PageSection>
  );
};

export default RestPage;
