import React,{useState}  from "react";

import './NewExpenseform.css';

const NewExpenseform=(props)=>{
  const [initialTitle,setenteredTitle]=useState('');
  const titlechangehandler=(event)=>{
    setenteredTitle(event.target.value);
  };
  const [initialAmount,setenteredAmount]=useState('');
  const amountchangehandler=(event)=>{
    setenteredAmount(event.target.value);
  }
  const [initialDate,setentereddate]=useState('');
  const datechangehandler=(event)=>{
    setentereddate(event.target.value);
  }
  const submitchangehandler=(event)=>{
     event.preventDefault();
    const expenseData={
      title:initialTitle,
      amount:initialAmount,
      date:new Date(initialDate)
    };
    props.onSaveExpenseData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setentereddate('');
  }
  return (
  <form onSubmit={submitchangehandler}>
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>Title</label>
      <input type='text' value={initialTitle} onChange={titlechangehandler}/>
    </div>
    <div className="new-expense__control">
      <label>Amount</label>
      <input type='number' min="0.01" step="0.01" value={initialAmount} onChange={amountchangehandler}/>
    </div>
    <div className="new-expense__control">
      <label>Date</label>
      <input type='date' min="2019-01-01" max="2022-12-31" value={initialDate} onChange={datechangehandler}/>
    </div>
  </div>
  <div className="new-expense__actions">
    <button type='submit'>Add Expense</button>
  </div>
  </form>
  );
}
export default NewExpenseform;