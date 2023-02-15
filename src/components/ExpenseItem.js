import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 15);
  const expenseTitle = "Car Insurance";
  const expensePrice = "294.67";

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}
