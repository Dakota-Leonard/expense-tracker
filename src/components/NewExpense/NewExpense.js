import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

//Form for inputs
const NewExpense = props => {
  const userFormSubmitHandler = enteredFormData => {
    const formData = {
      ...enteredFormData,
      //Lazy ID for testing purposes
      id: Math.random().toString(),
    };
    props.onAddExpense(formData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onUserFormSubmit={userFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
