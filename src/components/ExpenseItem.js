import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-header">
      <div className="expense-id"> {props.id} </div>
      <ExpenseDate itemDate={props.itemDate}></ExpenseDate>
      <div className="expense-title"> {props.title} </div>
      <div className="expense-price"> ${props.price} </div>
    </div>
  );
};
export default ExpenseItem;
