import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import s from './Footer.module.css'

const Footer = () => (
  <div className={s.footer}>
    <span>Открыть список: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Все
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Активные
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Завершенные
    </FilterLink>
  </div>
)

export default Footer
