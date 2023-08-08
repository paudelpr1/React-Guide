import Card from "../UI/Card";
import ExpenseItem from "../ExpenseFeature/ExpenseItem";
import '../ExpenseFeature/Expenses.css'


function Expenses(props){
    
    return (
        <Card className="expenses">
            <ExpenseItem date = {props.expense[0].date} expenseTitle = {props.expense[0].title} expenseAmount = {props.expense[0].amount}></ExpenseItem>
            <ExpenseItem date = {props.expense[1].date} expenseTitle = {props.expense[1].title} expenseAmount = {props.expense[1].amount}></ExpenseItem>
        </Card>
    );

}

export default Expenses;