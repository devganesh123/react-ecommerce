import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "../style/expense-item.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-wrapper">
      <div className="expense-header">
        <ExpenseDate itemDate={props.itemDate}></ExpenseDate>
        <div className="expense-title"> {props.title} </div>
        <div className="expense-price"> ${props.price} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
