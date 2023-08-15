import Expenses from "./Components/ExpenseFeature/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App(){
  const expense = [
    {date: new Date(2023, 8, 8),
     title: "Car Insurance",
     amount: 300},
    
    {
      date: new Date(2022, 7, 9),
      title: "Rent",
      amount: 400
    },

    {
      date: new Date(2020, 7, 9),
      title: "School Fee",
      amount: 1500
    },

    {
      date: new Date(2019, 7, 9),
      title: "Plane Ticket",
      amount: 2000
    }
  ]

  const AddNewExpenseHandler = (expense) =>{
    console.log(expense);
  }

  return(
    <div>
      <h2>Let's get Started</h2>
      <NewExpense onAddExpense = {AddNewExpenseHandler}/>
      <Expenses expense ={expense}></Expenses>
    </div>
  )
}

export default App;