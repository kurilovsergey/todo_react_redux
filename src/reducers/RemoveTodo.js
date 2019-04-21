import React from 'react'
import {deleteTodo} from '../actions'
import {connect} from 'react-redux'

let RemoveTodo = ({id, dispatch}) => {
  return (
      
        <button onClick={e => {
          e.preventDefault()
          dispatch(deleteTodo(id))
          console.log(dispatch(deleteTodo(id)));
        }}>Удалить</button>
      
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo