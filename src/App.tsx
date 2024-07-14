import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utility" },
    { id: 2, description: "bbb", amount: 20, category: "Grocery" },
    { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 40, category: "Utility" },
  ]);

  function onDelete(id: number) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  function onCategorySelect(value: string) {
    setSelectedCategory(value);
  }

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onCategorySelected={onCategorySelect}></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete}></ExpenseList>
    </>
  );
}

export default App;
