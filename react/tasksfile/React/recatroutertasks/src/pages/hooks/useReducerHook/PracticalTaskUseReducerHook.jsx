import React from 'react';

const PracticalTaskUseReducerHook = () => {
  return (
    <div>

      <h2>Task 1: Todo List with useReducer</h2>
      <p>
        - Create a <strong>todo list</strong> using <code>useReducer</code>.
        <br />
        - Add functionality to:
        <ul>
          <li><strong>Add</strong> a new todo.</li>
          <li><strong>Toggle</strong> the completed status of a todo.</li>
          <li><strong>Delete</strong> a todo.</li>
        </ul>
        - Use <code>useReducer</code> for handling the state changes of todos.
      </p>

      <h2>Task 2: Shopping Cart with useReducer</h2>
      <p>
        - Build a <strong>shopping cart</strong> with the following functionalities using <code>useReducer</code>:
        <ul>
          <li><strong>Add</strong> an item to the cart with its price.</li>
          <li><strong>Remove</strong> an item from the cart.</li>
          <li><strong>Update</strong> the quantity of an item in the cart.</li>
          <li><strong>Calculate</strong> and display the total price of items in the cart.</li>
        </ul>
      </p>

      <h2>Task 3: Multiple Reducer States</h2>
      <p>
        - Implement a <strong>user profile</strong> form with <code>useReducer</code>.
        <br />
        - The form should manage:
        <ul>
          <li><strong>Name</strong> field.</li>
          <li><strong>Email</strong> field.</li>
          <li><strong>Age</strong> field.</li>
          <li><strong>Error messages</strong> for each field.</li>
        </ul>
        - Actions should include:
        <ul>
          <li><strong>Update field</strong> (for any form input).</li>
          <li><strong>Clear form</strong> (to reset all fields).</li>
          <li><strong>Set error</strong> (to show validation errors for each field).</li>
        </ul>
        - Use <code>useReducer</code> to manage the form data and validation state.
      </p>
    </div>
  );
};

export default PracticalTaskUseReducerHook;
