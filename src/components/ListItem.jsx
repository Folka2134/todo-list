import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const ListItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <li><button onClick={() => deleteTodo(todo.id)}>x</button><span>{todo.note}</span></li>
  )
}
