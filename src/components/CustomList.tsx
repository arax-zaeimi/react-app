import { useState } from "react";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function CustomList({ onSelectItem, items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
    <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CustomList;
