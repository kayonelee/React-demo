import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

{/**
*THE NEWTODOFORM COMPONENT RENDERS A FORM WITH AN INPUT FIELD AND A BUTTON.
*USERS CAN INPUT NEW ITEMS IN THE FIELD TO ADD THEM TO A TODO LIST. WHEN THEY
*SUBMIT THE FORM BY CLICKING THE "ADD" BUTTON, THE ONSUBMIT PROP FUNCTION IS
*INVOKED, PASSING THE NEW ITEM AS AN ARGUMENT. AFTER SUBMISSION, THE INPUT
*FIELD IS CLEARED, READY FOR THE NEXT ENTRY.
*/}
