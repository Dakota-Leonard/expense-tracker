import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState(
    new Date().getFullYear().toString()
  );

  const onFilterExpense = filterCriteria => {
    setFilterYear(filterCriteria);
  };

  //Filter original expense by year selected in dropdown
  const filterExpenses = expenses.filter(
    item => item.date.getFullYear().toString() === filterYear
  );

  //Manage displayed info on filter

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterExpense={onFilterExpense} />
      <ExpensesChart expenes={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
