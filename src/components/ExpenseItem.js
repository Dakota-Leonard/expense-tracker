import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div>
        <h2 className="expense-item_description">Title</h2>
        <div className="expense-item_price">Amount</div>
      </div>
    </div>
  );
}

//Date of Purchase
//Title = Description of purchase
//Amount = amount spent on purchase
export default ExpenseItem;
