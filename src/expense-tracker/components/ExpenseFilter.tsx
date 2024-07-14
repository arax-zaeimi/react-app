import categories from "../Categories";

interface Props {
  onCategorySelected: (value: string) => void;
}

const ExpenseFilter = ({ onCategorySelected }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onCategorySelected(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
