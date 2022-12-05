import "./style/app.css";
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenseData = [
    {
      id: "1",
      title: "Car Insurance",
      itemDate: new Date(2022, 7, 12),
      price: 100,
    },
    {
      id: "2",
      title: "Bike Parking",
      itemDate: new Date(2022, 7, 12),
      price: 120,
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="app-container">
        <NewExpense></NewExpense>
        <Expenses items={expenseData}></Expenses>
      </div>
    </div>
  );
}

export default App;
