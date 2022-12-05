import { useState } from "react";

const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const titleHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const priceHandler = (event) => {
    setInputPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // data object
    const formData = {
      titleInput: inputTitle,
      priceInput: inputPrice,
    };
    console.log(formData);

    //resetting form when submitted
    setInputTitle("");
    setInputPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="user-inputs">
        <div className="user-input_label">
          <label htmlFor="title">Title</label>
        </div>
        <div className="user-input_box">
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={titleHandler}
          />
        </div>
      </div>
      <div className="user-inputs">
        <div className="user-input_label">
          <label htmlFor="price">Price</label>
        </div>
        <div className="user-input_box">
          <input
            type="text"
            id="price"
            value={inputPrice}
            onChange={priceHandler}
          />
        </div>
      </div>
      <div className="user-inputs">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
