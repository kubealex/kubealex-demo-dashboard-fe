import React, { useState } from 'react';
import { PageSection, Title, Spinner, TextArea, TextInput, Button, Panel, Divider } from '@patternfly/react-core';

const RestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [payload, setPayload] = useState('');
  const [url, setUrl] = useState('');

  const handleSendRequest = async () => {
    try {
      setIsLoading(true);

      const requestOptions = {
        method: payload ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (payload) {
        requestOptions.body = payload;
      }

      const response = await fetch(url, requestOptions);

      const data = await response.json();
      setResponseData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <PageSection>
      <Title headingLevel="h1">REST Testing Page</Title>
      <div>
        <div>
          <div>URL</div>
          <TextInput
            id="url"
            name="url"
            value={url}
            onChange={(value) => setUrl(value)}
            aria-label="URL"
          />
        </div>
        <Divider />
        <div>
          <div>Payload</div>
          <TextArea
            id="payload"
            name="payload"
            value={payload}
            onChange={(value) => setPayload(value)}
            aria-label="Payload"
            autoResize
          />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={handleSendRequest}>Send Request</Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Title headingLevel="h2">Result</Title>
        <Panel>
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
        </Panel>
      </div>
    </PageSection>
  );
};

export default RestPage;
