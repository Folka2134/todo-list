import React from 'react'

export const ListItem = ({ todo }) => {
  return (
    <li><button>x</button><span>{todo.note}</span></li>
  )
}
