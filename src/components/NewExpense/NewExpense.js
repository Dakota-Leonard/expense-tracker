import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

//Form for inputs
const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const userFormSubmitHandler = enteredFormData => {
    const formData = {
      ...enteredFormData,
      //Lazy ID for testing purposes
      id: Math.random().toString(),
    };
    props.onAddExpense(formData);
    setIsEditing(!isEditing);
  };

  const addExpenseClickHander = prevData => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addExpenseClickHander}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onUserFormSubmit={userFormSubmitHandler} />}
    </div>
  );
};

export default NewExpense;
