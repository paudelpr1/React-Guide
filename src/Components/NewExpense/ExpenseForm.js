import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm  =  (props) =>{

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setNewAmount] = useState('');
    const[enteredDate, setNewDate] = useState('');
    

    const titleChangedHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const AmountChangeHandler = (event) =>{
        setNewAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {
        setNewDate(event.target.value);
    }

    const SubmitHandler = (event) =>{
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };
        props.onSubmitForm(expenseDate);
        setEnteredTitle('');
        setNewAmount('');
        setNewDate('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className = "new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" value = {enteredTitle} onChange = {titleChangedHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" min= "0.01" step = '0.01' value = {enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = "date" min = '2019-01-01' max = '2023-12-31'value = {enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>
           
        </form>
    )
}

export default ExpenseForm;