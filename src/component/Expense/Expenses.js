import React, { useState } from 'react';
import Card  from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expenses(props){
  const [filteredYear,setFilteredYear]=useState('2020');
  const yearchangehandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredexpense=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  
  return (<Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={yearchangehandler}/>
    <ExpenseChart expenses={filteredexpense}/>
    <ExpenseList items={filteredexpense}/>
  </Card>
);
}
export default Expenses;