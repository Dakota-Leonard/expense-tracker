import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div>
        <h2 className="expense-item_description">{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

//Date of Purchase
//Title = Description of purchase
//Amount = amount spent on purchase
export default ExpenseItem;
