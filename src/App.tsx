import ListGroup from "./components/ListGroup";

function App() {
  let items = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Car Makes"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
