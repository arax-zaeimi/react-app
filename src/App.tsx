import CustomList from "./components/CustomList";

function App() {
  let items = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];

  const handleOnSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div>
      <CustomList
        onSelectItem={handleOnSelectItem}
        items={items}
        heading="Car Makes"
      ></CustomList>
    </div>
  );
}

export default App;
