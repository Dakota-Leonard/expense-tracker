import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  if (!props.items.length) {
    return <h2 className="expenses-list_fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(item => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
