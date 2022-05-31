import React from 'react'

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      <div>
    
        {items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
      </div>
    </Card>
  );
}

export default Expenses;
