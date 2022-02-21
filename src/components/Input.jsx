import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Input = () => {
  const [text, setText] = useState('')
  const { addTodo } = useContext(GlobalContext)

  const submit = (e) => {
    e.preventDefault()

    const newNote = {
      id: Math.floor(Math.random() * 10000),
      todo: text
    }

    addTodo(newNote)
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='new note' onChange={(e) => setText(e.currentTarget.value)} />
      <button>+</button>
    </form>
  )
}
