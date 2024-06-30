import { Like } from "./components/Like";
import { useState } from "react";

function onClick() {
  console.log("button clicked!");
}

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  const handleLikeClicked = () => {
    console.log("like clicked!");
  };

  return (
    <div>
      <Like onClick={handleLikeClicked}></Like>
    </div>
  );
}

export default App;
