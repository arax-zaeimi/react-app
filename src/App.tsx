import { Button } from "./components/Button/Button";
import { Alert } from "./components/Alert";
import { useState } from "react";

function onClick() {
  console.log("button clicked!");
}

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}> My alert </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisiblity(true)}>
        My cool button
      </Button>
    </div>
  );
}

export default App;
