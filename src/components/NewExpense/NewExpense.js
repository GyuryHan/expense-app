import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
    setVisible(false);
  };

  const openSubmitForm = () => {
    setVisible(true);
  };

  const hideSubmitForm = () => {
    setVisible(false);
  };

  return (
    <div className="new-expense">
      {visible ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideSubmitForm}
          // onAdd={openSubmitForm}
        />
      ) : (
        <button onClick={openSubmitForm}>탭열기</button>
      )}
    </div>
  );
};

export default NewExpense;
