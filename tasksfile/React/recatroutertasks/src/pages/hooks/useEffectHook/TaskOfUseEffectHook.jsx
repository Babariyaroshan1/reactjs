import React from 'react';

const TaskOfUseEffectHook = () => {
  return (
    <div style={{ padding: '20px' }}>

      <h2>Task 1: Fetch and Display Posts</h2>
      <p>
        • Use the API: https://jsonplaceholder.typicode.com/posts<br />
        • Display the list of post titles.<br />
        • Show a loading message while data is being fetched.
      </p>

      <h2>Task 2: User Search by Name</h2>
      <p>
        • Fetch users from: https://jsonplaceholder.typicode.com/users<br />
        • Add an input box to search users by name.<br />
        • Filter and display matching results in real-time.
      </p>

      <h2>Task 3: Display Todo List with Status</h2>
      <p>
        • Use the API: https://jsonplaceholder.typicode.com/todos<br />
        • Display todo title and status (completed or not).<br />
        • Style completed items with a strikethrough.
      </p>

      <h2>Task 4: Load Post by ID</h2>
      <p>
        • Create an input field for post ID (1–100).<br />
        • On entering a number, fetch and display that specific post's title and body.<br />
        • Use https://jsonplaceholder.typicode.com/posts/{"{id}"}
      </p>

      <h2>Task 5: Refresh Data with Button</h2>
      <p>
        • Fetch users from https://jsonplaceholder.typicode.com/users<br />
        • Add a "Refresh Data" button.<br />
        • When clicked, it should re-fetch the data and update the list.
      </p>
    </div>
  );
};

export default TaskOfUseEffectHook;
