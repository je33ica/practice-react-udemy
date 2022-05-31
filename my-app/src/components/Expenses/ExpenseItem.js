import React from 'react'

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";


const ExpenseItem = ({date, title, amount}) => {
 const [titleA, setTitle] =  useState(title)

  const buttonClick = ()=> {
    setTitle('updated')
    console.log(titleA)
  
  };
  
  return (

    <Card className="expense-item">
     <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{titleA}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={buttonClick}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
