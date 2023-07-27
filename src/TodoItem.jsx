export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }

{/**
*THE TODOITEM COMPONENT DISPLAYS A LIST ITEM REPRESENTING A TODO ENTRY. IT INCLUDES
*A CHECKBOX TO INDICATE COMPLETION STATUS AND SHOWS THE TITLE NEXT TO THE CHECKBOX.
*A DELETE BUTTON IS PROVIDED TO REMOVE THE TODO ITEM FROM THE LIST.
*THE COMPONENT RECEIVES TOGGLETODO AND DELETETODO FUNCTIONS AS PROPS, ENABLING 
*USERS TO INTERACT WITH THE TODO LIST BY MARKING ITEMS AS COMPLETED AND 
*DELETING THEM WHEN NECESSARY.
*/}