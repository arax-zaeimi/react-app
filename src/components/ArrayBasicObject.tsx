import React from "react";
import { useState } from "react";

const Array = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <>
      <button onClick={handleClick}>CLIIIIIIIIIIIICK</button>
    </>
  );
};

export default Array;
