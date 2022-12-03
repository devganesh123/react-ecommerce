import "./style/app.css";
import Navbar from "./components/Navbar";
import ExpenseItem from "./components/ExpenseItem";

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
        <ExpenseItem
          id={expenseData[0].id}
          title={expenseData[0].title}
          itemDate={expenseData[0].itemDate}
          price={expenseData[0].price}
        ></ExpenseItem>
        <ExpenseItem
          id={expenseData[1].id}
          title={expenseData[1].title}
          itemDate={expenseData[1].itemDate}
          price={expenseData[1].price}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
