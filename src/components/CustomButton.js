import React, { useState } from "react";
import { Button } from "@patternfly/react-core";

const CustomButton = ({
  buttonText,
  endpoint,
  requestBody = null,
  method = "GET",
  onFetchResult,
}) => {
  const handleClick = async () => {
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
    } catch (error) {
      console.error("Error:", error);
      const fetchResult = { success: false, error };
      onFetchResult(fetchResult);
    }
  };

  return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default CustomButton;
