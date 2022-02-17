import React from 'react'

export const Input = () => {

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='new note' />
      <button>+</button>
    </form>
  )
}
