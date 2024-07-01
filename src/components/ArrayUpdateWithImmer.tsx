import { useState } from "react";
import produce from "immer";

const ArrayUpdateWithImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const toggleBugStatus = () => {
    // Update - if the bug id is 1, then toggle the status.
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = !bug.fixed;
      })
    );
  };

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={toggleBugStatus}>Toggle</button>
    </>
  );
};

export default ArrayUpdateWithImmer;
