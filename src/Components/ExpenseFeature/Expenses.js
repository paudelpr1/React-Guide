import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "../ExpenseFeature/ExpenseItem";
import '../ExpenseFeature/Expenses.css'
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props){
    const[intialDate, selectedDate] = useState('2019');

    const DateAccessHandler = (datereceived) =>{
        selectedDate(datereceived);
    }
    
    return (
        <Card className="expenses">
            <ExpenseFilter selected = {intialDate} onDateSelected = {DateAccessHandler}/>
            <ExpenseItem date = {props.expense[0].date} expenseTitle = {props.expense[0].title} expenseAmount = {props.expense[0].amount}></ExpenseItem>
            <ExpenseItem date = {props.expense[1].date} expenseTitle = {props.expense[1].title} expenseAmount = {props.expense[1].amount}></ExpenseItem>
            <ExpenseItem date = {props.expense[2].date} expenseTitle = {props.expense[2].title} expenseAmount = {props.expense[2].amount}></ExpenseItem>
            <ExpenseItem date = {props.expense[3].date} expenseTitle = {props.expense[3].title} expenseAmount = {props.expense[3].amount}></ExpenseItem>
        </Card>
    );

}

export default Expenses;