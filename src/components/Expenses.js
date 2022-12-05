import Card from "./Card";
import "../style/expense-item.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expense-wrapper">
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        itemDate={props.items[0].itemDate}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        itemDate={props.items[1].itemDate}
        price={props.items[1].price}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
