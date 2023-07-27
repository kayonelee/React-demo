import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

{/**
*THE TODOLIST COMPONENT DISPLAYS AN UNORDERED LIST OF TODO ITEMS. IF THERE ARE
*NO TODOS TO SHOW, IT PRESENTS THE MESSAGE "NO TODOS." FOR EACH TODO ITEM IN 
*THE TODOS ARRAY, THE COMPONENT RENDERS THE TODOITEM COMPONENT, PASSING THE 
*RESPECTIVE TODO PROPERTIES AND FUNCTIONS TO MANAGE COMPLETION STATUS AND DELETION.
*/}