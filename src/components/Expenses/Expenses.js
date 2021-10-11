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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterExpense={onFilterExpense} />
      {expenses
        .filter(item => item.date.getFullYear().toString() === filterYear)
        .map(item => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      })}
    </Card>
  );
};

export default Expenses;
