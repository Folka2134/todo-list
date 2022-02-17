import React from 'react'
import { ListItem } from './ListItem'

export const List = () => {
  return (
    <>
      <button>Clear list</button>
      <ul>
        <ListItem />
      </ul>
    </>
  )
}
