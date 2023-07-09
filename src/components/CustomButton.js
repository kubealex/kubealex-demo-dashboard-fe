import React from 'react';
import { Button } from '@patternfly/react-core';

const CustomButton = ({ buttonText, endpoint, requestBody }) => {
  const handleClick = async () => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      console.log(`Button '${buttonText}' clicked. Response:`, data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button onClick={handleClick}>{buttonText}</Button>
  );
};

export default CustomButton;