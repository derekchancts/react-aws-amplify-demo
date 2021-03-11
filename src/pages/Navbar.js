import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


const Navbar = (props) => {
  // console.log(props);

  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <div className="brand-logo">Poke Times</div>
        <ul className="right">
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
