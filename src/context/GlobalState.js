import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

const initialState = {
  todos : [ 
    { id: 1, note: "First note of the day"}, 
    { id: 2, note: "Second note of the day lorem5"}, 
    { id: 3, note: "third note of the day lorem5"} 
  ] 
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteTodo
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
