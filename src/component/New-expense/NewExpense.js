import React,{useState} from 'react';
import NewExpenseform from './NewExpenseform';
import './NewExpense.css';

const NewExpense=(props)=>{
  const [isediting,setisediting]=useState(false);
  const onsavechangehandler=(enteredexpensedata)=>{
    const expensedata={
    ...enteredexpensedata,
    id:Math.random()
    };
    props.todisplayExpenseData(expensedata);
    setisediting(false);
  }
  const startclickhandler=()=>{
    setisediting(true);
  }
  const endclickhandler=()=>{
    setisediting(false);
  }
  return <div className='new-expense'>
    {!isediting && (<button onClick={startclickhandler}>Add New Expense</button>)}
    {isediting && <NewExpenseform onSaveExpenseData={onsavechangehandler} oncancel={endclickhandler}/> }
  </div>
}
export default NewExpense;