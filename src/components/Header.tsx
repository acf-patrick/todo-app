import "../assets/styles/Header.scss";

function Header({ onSubmit }: any) {
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="#todo-input">Add Todo</label>
        </p>
        <input type="text" name="input" id="todo-input" placeholder="New Todo" />
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Header;
