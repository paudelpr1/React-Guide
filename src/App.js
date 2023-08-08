import Expenses from "./Components/ExpenseFeature/Expenses";

function App(){
  const expense = [
    {date: new Date(2023, 8, 8),
     title: "Car Insurance",
     amount: 300},
    
    {
      date: new Date(2023, 7, 9),
      title: "Rent",
      amount: 400
    }
  ]

  return(
    <div>
      <h2>Let's get Started</h2>
      <Expenses expense ={expense}></Expenses>
    </div>
  )
}

export default App;