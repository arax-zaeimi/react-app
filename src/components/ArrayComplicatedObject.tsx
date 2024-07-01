import { useState } from "react";

const ArrayUpdateComplicateObject = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // Update - if the bug id is 1, then toggle the status.
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug))
    );
  };

  return (
    <>
      <div>
        {bugs[0].title} - {bugs[0].fixed === true ? "fixed" : "not fixed"}
      </div>
      <button onClick={handleClick}>CLIIIIIIIIIIIICK</button>
    </>
  );
};

export default ArrayUpdateComplicateObject;
