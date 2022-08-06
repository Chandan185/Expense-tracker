import React , { useState } from 'react';
import Expenses from './component/Expense/Expenses';
import NewExpense from './component/New-expense/NewExpense';
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses,updated_expenses]=useState(dummy_expenses);
  const displayExpenseData=(expensedata)=>{
    //more clean way of updating the states is not this
    // updated_expenses([expensedata,...expenses]);
    updated_expenses((prevexpenses)=>{
      return [expensedata,...prevexpenses];
    });
  }
  return (<div>
    <NewExpense todisplayExpenseData={displayExpenseData}/>
    <Expenses expenses={expenses}/>
  </div>);
  
}

export default App;
