import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../reducers/RemoveTodo.js'
import s from './Todo.module.css'

debugger;

const Todo = ({ onClick, completed, text, id }) => (
  <div
    onClick={onClick}
    className={ completed ? s.completed : s.none
    }>
      <span>
        {text}
        <RemoveTodo id={id} />
      </span>

  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
