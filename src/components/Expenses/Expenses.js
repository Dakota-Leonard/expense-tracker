import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
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
  let expensesContent = <p>No expenses found.</p>;
  if (filterExpenses.length) {
    expensesContent = filterExpenses.map(item => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterExpense={onFilterExpense} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
