import React from "react";
import './ExpenseList.css';
import Expenseitem from "./expenseitem";
const ExpenseList=(props)=>{
  if(props.items.length===0){
    return <ul className="expenses-list__fallback">
      <h2>NO EXPENSES FOUND</h2>
    </ul>
  }
  return <ul className="expenses-list">
    {props.items.map((expense)=> <Expenseitem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
  </ul>
}
export default ExpenseList;
