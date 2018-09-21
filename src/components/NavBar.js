import React from 'react';
import CartCounter from './CartCounter';
let Navbar = () => (
  <div className="nav">
    <h1 className="title">Et Setera</h1>
    <div className="spacer" />
    <CartCounter />
  </div>
)
export default Navbar;