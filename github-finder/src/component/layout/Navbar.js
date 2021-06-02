import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//Link saves the old state and get back to anothe page without loose data

function Navbar({icon,title}){
  
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}/> {title}</h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
      </nav>
    )
}

  //if no props from master component, these ones will be assumed.
  Navbar.defaultProps={
    title:'Github Finder',
    icon:'fab fa-github'
  }

  //if prop comes from parent component with diferent type from the below,
  //log will raise warning
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

export default Navbar
