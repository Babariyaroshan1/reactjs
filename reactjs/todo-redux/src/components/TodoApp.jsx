import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../features/todos/todosSlice";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddOrEdit = () => {
    if (!task.trim()) return;

    if (isEditing) {
      dispatch(updateTodo({ id: editId, newText: task }));
      setIsEditing(false);
      setEditId(null);
    } else {
      dispatch(addTodo(task));
    }

    setTask("");
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setTask(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-dark">
      <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">To-Do List (Redux)</h3>

        <div className="d-flex mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className={`btn ${isEditing ? "btn-primary" : "btn-success"} ms-2`}
            onClick={handleAddOrEdit}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo.text}
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
