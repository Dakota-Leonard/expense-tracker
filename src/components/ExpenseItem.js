import './ExpenseItem.css';

function ExpenseItem(props) {
  //Date Formatting
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
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
