import '../ExpenseFeature/ExpenseItem.css';
import ExpenseDate from '../ExpenseFeature/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){

    return (
    <Card className='expense-item'>
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">{props.expenseAmount}</div>
        </div>
    </Card>)
}

export default ExpenseItem;