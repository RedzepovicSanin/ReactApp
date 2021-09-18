import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  console.log(props);
  return (
    <div className="expenses">
      <ExpenseItem  
        title={props.expenses.expenses[0].title}
        amount={props.expenses.expenses[0].amount}
        date={props.expenses.expenses[0].date}
      />
      <ExpenseItem  
        title={props.expenses.expenses[1].title}
        amount={props.expenses.expenses[1].amount}
        date={props.expenses.expenses[1].date}
      />
      <ExpenseItem  
        title={props.expenses.expenses[2].title}
        amount={props.expenses.expenses[2].amount}
        date={props.expenses.expenses[2].date}
      />
    </div>
  );
}

export default Expenses;