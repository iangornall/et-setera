import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
const SideBar = (props) => (
  <ul>
    <li><NavLink to='/'>All</NavLink></li>
    {props.categories.map(category => (
      <li key={category.id}>
        <NavLink to={'/categories/' + category.id}>
          {category.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default connect(state => ({categories: state.categories}))(SideBar);