import './ExpenseItem.css';

function ExpenseItem() {
  //Dummy Data for testing
  const expenseDate = new Date(2021, 10, 10);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div>
        <h2 className="expense-item_description">{expenseTitle}</h2>
        <div className="expense-item_price">${expenseAmount}</div>
      </div>
    </div>
  );
}

//Date of Purchase
//Title = Description of purchase
//Amount = amount spent on purchase
export default ExpenseItem;
