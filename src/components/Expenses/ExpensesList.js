import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (prop) => {
  if (prop.data.length === 0) {
    return <h2 className="expenses-list__fallback">데이터가 없습니다.</h2>;
  }
  return (
    <ul className="expenses-list">
      {prop.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
