import React, { useState } from "react";
import { Button, Spinner, Alert } from "@patternfly/react-core";

const CustomButton = ({
  buttonText,
  endpoint,
  requestBody = null,
  method = "GET",
  isDisabled = false,
  onFetchResult,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setIsAlertVisible(false);

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      if (!response.ok) {
        throw new Error(`HTTP request failed with status ${response.status}`);
      }

      const data = await response.json();
      const fetchResult = { success: true };
      onFetchResult(fetchResult);
      console.log(`Button '${buttonText}' clicked. Response:`, data);

      setIsAlertVisible(true);
    } catch (error) {
      console.error("Error:", error);
      const fetchResult = { success: false, error };
      onFetchResult(fetchResult);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        isDisabled={isDisabled || isLoading}
        onClick={handleClick}
        isLoading={isLoading}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default CustomButton;
