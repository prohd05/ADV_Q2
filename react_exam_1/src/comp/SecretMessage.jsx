import { useState } from 'react';

function SecretMessage() {
  // Step 1: Create state for whether message is visible
  const [isVisible, setIsVisible] = useState(false);
  
  // Step 2: Create a function to toggle the state
  const toggleMessage = () => {
setIsVisible(!isVisible);
  };
  
  return (
    <div>
      <button onClick={toggleMessage}> 
      {isVisible && <p> Hide Message </p> || !isVisible && <p> Show Message </p>}
      </button>
      
      {/* Step 4: Conditionally render the message */}
      {isVisible && <p>🎉 Congratulations! You found the secret message!</p>}
    </div>
  );
}

export default SecretMessage;
