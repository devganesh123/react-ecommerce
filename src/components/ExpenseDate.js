const ExpenseDate = (props) => {
  const expenseMonth = props.itemDate.toLocaleString("en-US", {
    month: "long",
  });
  const expenseDay = props.itemDate.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.itemDate.getFullYear();

  return (
    <div className="expense-date">
      <span> {expenseMonth} </span>
      <span> {expenseDay} </span>
      <span> {expenseYear} </span>
    </div>
  );
};
export default ExpenseDate;
