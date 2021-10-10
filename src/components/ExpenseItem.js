import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

//Date of Purchase
//Title = Description of purchase
//Amount = amount spent on purchase
export default ExpenseItem;
