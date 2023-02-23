import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expense(props) {
  const [yearValue, setYearValue] = useState("2022");
  const getValue = (value) => {
    setYearValue(value);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter getValue={getValue} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
