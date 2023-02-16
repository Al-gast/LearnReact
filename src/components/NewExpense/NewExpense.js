import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
