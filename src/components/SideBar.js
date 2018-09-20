import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
const SideBar = (props) => (
  <ul className="category-list">
    <li className="category"><NavLink className="category-link" activeClassName="category-link-active" exact to='/'>All</NavLink></li>
    {props.categories.map(category => (
      <li className="category" key={category.id}>
        <NavLink activeClassName="category-link-active" className="category-link" to={'/categories/' + category.id}>
          {category.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default connect(state => ({categories: state.categories}))(SideBar);